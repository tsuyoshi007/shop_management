 
import React from "react";
import { Route, RouteProps } from "react-router-dom";

interface SectionRouteProps extends RouteProps {
    permissions?: boolean
}

export const SectionRoute: React.FC<SectionRouteProps> = ({
  permissions,
  ...props
}) => {
    return permissions ? <Route {...props} /> : <h1>not found</h1>;
};

export default SectionRoute;