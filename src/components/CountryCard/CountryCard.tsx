import { Card, CardHeader, Avatar } from "@mui/material";

const CountryCard = () => {
  return (
    <Card>
      <CardHeader avatar={<Avatar />} title={"CountryName"} />
      Country
    </Card>
  );
};

export default CountryCard;
