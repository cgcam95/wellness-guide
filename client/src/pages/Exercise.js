import React from 'react';
import Header from "../components/Header";
import Details from '../components/Details';
import { QUERY_ALL_EXERCISE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Outlet } from 'react-router-dom';

const Exercise = () => {
    const { loading, data } = useQuery(QUERY_ALL_EXERCISE);


    return(
        <>
            <Header />
            <br />
            <div>{loading ? <h2>LOADING</h2> : <Details details={data.exercise} />}</div>
            <Outlet />
        </>
    )
}

export default Exercise;

