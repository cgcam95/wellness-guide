import React from 'react';
import Header from "../components/Header";
import Details from '../components/Details';
import { QUERY_ALL_MEDITATION } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Outlet } from 'react-router-dom';

const Meditation = () => {
    const {loading, data } =useQuery(QUERY_ALL_MEDITATION);

    return(
        <>
            <Header />
            <br />
            <div>{loading ? <h2>LOADING</h2> : <Details details={data.meditation} />}</div>
            <Outlet />
        </>
    )
}

export default Meditation;