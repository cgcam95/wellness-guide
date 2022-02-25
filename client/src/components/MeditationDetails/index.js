import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEDITATION_ID } from "../../utils/queries";

const MeditationDetails = () => {
    
    const {meditationid} = useParams();

    const{loading, data} = useQuery(QUERY_MEDITATION_ID, {
        variables: {id: meditationid}
    });

    return(
        <>
            {<div> {loading ? <h2>LOADING</h2> : <h2>{data.meditationID.title}</h2>} </div>}

            <Outlet />
        </>
    )
}

export default MeditationDetails;