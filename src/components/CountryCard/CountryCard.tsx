import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Country } from "../../api/types";

type CountryCardProps = Country;
const CountryCard = ({
  country,
  countryInfo,
  cases,
  deaths,
  recovered,
}: CountryCardProps) => {
  return (
    <Card>
      <CardHeader avatar={<Avatar src={countryInfo.flag} />} title={country} />
      <CardContent>
        <List dense>
          <ListItem>
            <ListItemText primary={`Cases: ${cases}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Deaths: ${deaths}`} />
          </ListItem>
          <ListItem>
            <ListItemText primary={`Recovered: ${recovered}`} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
