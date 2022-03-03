import React from 'react';
import Header from "../components/Header";
import Details from '../components/Details';
import { QUERY_ALL_MEDITATION } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Outlet, useLocation } from 'react-router-dom';

const Meditation = () => {
    const {loading, data } =useQuery(QUERY_ALL_MEDITATION);
    
    const location = useLocation();

    const checkLocation = () => {
        if (location.pathname === '/meditation'){
          return true;
        } else {
          return false;
        }
      }
    return(
        <>
            <Header />
            <br />
            <div>{checkLocation() && (loading ? <h2>LOADING</h2> : <Details details={data.meditation} />)}</div>
            <Outlet />
        </>
    )
}

export default Meditation;