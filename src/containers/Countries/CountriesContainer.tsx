import { useQuery } from "react-query";
import CountryCard from "../../components/CountryCard";
import { getCountries } from "../../api/countries";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);

  return <CountryCard />;
};

export default CountriesContainer;
