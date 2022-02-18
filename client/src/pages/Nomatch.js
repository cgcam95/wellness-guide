import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const Nomatch = () => {
  return (
    <div>
      <Header />
      <Link to="/"><h1 className="pt-5">404 Page Not Found</h1></Link>
    </div>
  );
};

export default Nomatch;