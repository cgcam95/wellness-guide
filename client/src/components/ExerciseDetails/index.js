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
        {<div> {loading ? <h2>LOADING</h2> : <h2>{data.exerciseID.title}</h2>}</div>}

        <Outlet />
        </>
    )
}

export default ExerciseDetails;