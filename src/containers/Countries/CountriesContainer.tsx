import { useQuery } from "react-query";
import { Container } from "@mui/material";
import CountryCard from "../../components/CountryCard";
import { getCountries } from "../../api/countries";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);

  return (
    <Container maxWidth="md">
      <Container>
        {data?.map((country) => (
          <CountryCard key={country.country} {...country} />
        )) || <div>No Countries</div>}
      </Container>
    </Container>
  );
};

export default CountriesContainer;
