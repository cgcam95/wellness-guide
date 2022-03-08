import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_EXERCISE_ID } from "../../utils/queries";

const ExerciseDetails = () => {
    const {exerciseid} = useParams();

    const {loading, data} = useQuery(QUERY_EXERCISE_ID, {
        variables: {id: exerciseid}
    });

    return(
        <>
            {<div>{loading ? <h2>LOADING</h2> : <div>
                <h2 className='text-center'>{data.exerciseID.title}</h2>\
                <img className="img-responsive center-block d-block mx-auto" src={'/assets/'+data.exerciseID.image} alt={data.exerciseID.title}/>
                <p className="mt-3 mx-5">{data.exerciseID.description}</p>
                </div>
            }</div>}
        <Outlet />
        </>
    )
}

export default ExerciseDetails;