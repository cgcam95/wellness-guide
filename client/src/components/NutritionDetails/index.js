import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_NUTRITION_ID } from "../../utils/queries";

const NutritionDetails = () => {

    const {nutritionid} = useParams();

    const {loading, data } = useQuery(QUERY_NUTRITION_ID, {
        variables: {id: nutritionid}
    });
     
    return(
        <>
             {<div>{loading ? <h2>LOADING</h2> : <div>
                <h2 className='text-center'>{data.nutritionID.title}</h2>\
                <img className="img-responsive center-block d-block mx-auto" src={'/assets/'+data.nutritionID.image} alt={data.nutritionID.title}/>
                <p className="mt-3 mx-5">{data.nutritionID.description}</p>
            </div>
             }</div> }
             {loading ? null : console.log(nutritionid+" "+data.nutritionID.title)}
            <Outlet />
        </>
    )
}

export default NutritionDetails;