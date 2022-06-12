import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getCountry } from "../../api";
import PageLoader from "../../components/Loader/PageLoader";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const CountryContainer = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery(["country", id], () =>
    getCountry(id || "")
  );

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ marginBottom: "10px" }}>
        {data?.country}
      </Typography>
      <img src={data?.countryInfo.flag} alt={data?.country} />

      <List dense>
        <ListItem>
          <ListItemText primary={`Active cases: ${data?.active}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Active cases per one million: ${data?.activePerOneMillion}`}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={`Cases: ${data?.cases}`} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={`Cases per one million: ${data?.casesPerOneMillion}`}
          />
        </ListItem>
      </List>
    </Container>
  );
};

export default CountryContainer;
