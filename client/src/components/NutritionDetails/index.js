import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_NUTRITION_ID } from "../../utils/queries";

const NutritionDetails = () => {

    const {nutritionid} = useParams();

    const {loading, data } = useQuery(QUERY_NUTRITION_ID, {
        variables: {nutritionid}
    });

    return(
        <>
             {/*<div>{loading ? <h2>LOADING</h2> : <h2>{data.nutritionID.title}</h2>}</div> */}
             {loading ? null : console.log(nutritionid+" "+data)}

            <Outlet />
        </>
    )
}

export default NutritionDetails;