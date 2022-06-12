import { PropsWithChildren } from "react";
import { Link, LinkProps } from "@mui/material";
import {
  Link as RouteLink,
  LinkProps as RouteLinkProps,
} from "react-router-dom";

type NavLinkProps = PropsWithChildren<LinkProps & RouteLinkProps>;

const NavLink = (props: NavLinkProps) => {
  return <Link {...props} component={RouteLink} />;
};

export default NavLink;
