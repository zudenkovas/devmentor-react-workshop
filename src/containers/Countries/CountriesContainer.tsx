import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Container, TextField } from "@mui/material";
import CountryCard from "../../components/CountryCard";
import PageLoader from "../../components/Loader/PageLoader";
import { getCountries, Country } from "../../api";

const CountriesContainer = () => {
  const { data, isLoading } = useQuery("countries", getCountries);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState<Country[]>([]);

  useEffect(() => {
    if (data?.length) {
      setSearchResult(data);
    }
  }, [data]);

  if (isLoading) {
    return <PageLoader />;
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (data?.length) {
      const query = e.target.value.toLowerCase();
      const result = data.filter((country) => {
        return country.country.toLowerCase().includes(query);
      });

      setSearchResult(result);
      setSearchQuery(query);
    }
  };

  return (
    <Container maxWidth="md">
      <TextField
        label="Search"
        sx={{ margin: "20px 0" }}
        fullWidth
        placeholder="Search country"
        value={searchQuery}
        onChange={handleSearch}
      />

      <Container
        disableGutters
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "20px",
        }}
      >
        {searchResult?.map((country) => (
          <CountryCard key={country.country} {...country} />
        )) || <div>No Countries</div>}
      </Container>
    </Container>
  );
};

export default CountriesContainer;
