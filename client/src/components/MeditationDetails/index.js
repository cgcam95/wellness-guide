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
            {<div>{loading ? <h2>LOADING</h2> : <div>
                <h2 className='text-center'>{data.meditationID.title}</h2>\
                <img className="img-responsive center-block d-block mx-auto" src={'/assets/'+data.meditationID.image} alt={data.meditationID.title}/>
                <p className="mt-3 mx-5">{data.meditationID.description}</p>
                </div>
            }</div>}
            <Outlet />
        </>
    )
    }

export default MeditationDetails;