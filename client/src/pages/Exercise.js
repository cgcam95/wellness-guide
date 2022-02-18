import React from 'react';
import Header from "../components/Header";
import { QUERY_ALL_EXERCISE } from '../utils/queries';
import { useQuery } from '@apollo/client';

const Exercise = () => {
    const { loading, data } = useQuery(QUERY_ALL_EXERCISE);







    return(
        <>
            <Header />
            <br />
            <h2>{data.exercise[0].title}</h2>
        </>
    )
}

export default Exercise;

