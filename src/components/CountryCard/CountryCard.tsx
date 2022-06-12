import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { generatePath } from "react-router-dom";
import NavLink from "../Link";
import { RouteKey } from "../../navigation/routes";
import { Country } from "../../api";

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
      <NavLink
        to={generatePath(RouteKey.Country, { id: country })}
        underline="none"
        color="inherit"
      >
        <CardHeader
          avatar={<Avatar src={countryInfo.flag} />}
          title={country}
        />
      </NavLink>
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
