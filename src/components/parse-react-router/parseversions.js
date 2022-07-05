import React from "react";
import { useLocation, useParams } from "react-router";

const withRouter = (WrappedComponent) => (props) => {
  const  params  = useParams();
  const { pathname } = useLocation();
  return <WrappedComponent pathname={pathname}  {...params} />;
};

export default withRouter;
