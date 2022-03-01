import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import Header from "../components/Header";
import Details from "../components/Details";
import { QUERY_ALL_NUTRITION } from "../utils/queries";
import { Outlet } from "react-router-dom";

const Nutrition = () => {
    
    const { loading, data } = useQuery(QUERY_ALL_NUTRITION);

    const [boolDetails] = useState(true);

    return(
        <>
            <Header />
            <br />
            <div>{loading ? <h2>LOADING</h2> : <Details details={data.nutrition} />}</div>
            <Outlet />
        </>
    )
}
export default Nutrition;