import React, {useEffect} from 'react';
import Header from "../components/Header";
import Body from "../components/Body";

const Homepage = () => {
    useEffect(() => {
        document.title = "Wellness Guide";

    }, []);

    return(
        <>
            <Header />
            <br />
            <Body />
        </>
    )

}

export default Homepage;