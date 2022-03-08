import React, {useEffect} from 'react';
import Header from "../components/Header";
import Details from '../components/Details';
import { QUERY_ALL_EXERCISE } from '../utils/queries';
import { useQuery } from '@apollo/client';
import { Outlet, useLocation } from 'react-router-dom';

const Exercise = () => {
    const { loading, data } = useQuery(QUERY_ALL_EXERCISE);

    useEffect(() => {
      document.title = "Wellness Guide | Exercise";  
    }, []);

    const location = useLocation();

    const checkLocation = () => {
        if (location.pathname === '/exercise'){
          return true;
        } else {
          return false;
        }
      }

    return(
        <>
            <Header />
            <br />
            <div>{checkLocation() && (loading ? <h2>LOADING</h2> : <Details details={data.exercise} />) }</div>
            <Outlet />
        </>
    )
}

export default Exercise;

