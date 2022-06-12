import { Routes, Route } from "react-router-dom";
import { RouteKey } from "./routes";
import CountriesContainer from "../containers/Countries/CountriesContainer";
import CountryContainer from "../containers/Country/CountryContainer";

const MainRouter = () => {
  return (
    <Routes>
      <Route path={RouteKey.Index} element={<CountriesContainer />} />
      <Route path={RouteKey.Countries} element={<CountriesContainer />} />
      <Route path={RouteKey.Country} element={<CountryContainer />} />
    </Routes>
  );
};

export default MainRouter;
