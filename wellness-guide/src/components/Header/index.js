import React from "react";
import "./style.css"

const Header = () => {
    return(
        <div className="container mw-100 pt-4 pb-2" id="header">
            <div className="row mw-100">
                <h1 className="col-4 px-5">Wellness Guide</h1>
                <a href="#" className ="col pt-5 pb-2">Home</a>
                <a href="#nutrtion" className ="col pt-5 pb-2">Nutrition</a>
                <a href="#meditation" className ="col pt-5 pb-2">Meditation</a>
                <a href="#exercise" className ="col pt-5 pb-2">Exercise</a>
            </div>
        </div>
    )

}

export default Header;