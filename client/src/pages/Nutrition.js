import { useQuery } from "@apollo/client";
import React from "react";
import Header from "../components/Header";
import Details from "../components/Details";
import { QUERY_ALL_NUTRITION } from "../utils/queries";
import { Outlet, useLocation } from "react-router-dom";

const Nutrition = () => {
    
    const { loading, data } = useQuery(QUERY_ALL_NUTRITION);
    const location = useLocation();

    const checkLocation = () => {
        if (location.pathname === '/nutrition'){
          return true;
        } else {
          return false;
        }
      }
    return(
        <>
            <Header />
            <br />
            <div>{checkLocation() && (loading ? <h2>LOADING</h2> : <Details details={data.nutrition} />)}</div>
            <Outlet />
        </>
    )
}
export default Nutrition;