import React from "react";

const Details = (props) => {
    const displayedData = props.details;

    return(
        <div className="container pb-5">{displayedData.map((element) => 
        <div key={element.title.concat("-div")}>
            <div className="row">
                <h2 key = {element._id} className="pb-2 text-decoration-underline">{element.title}</h2>
            </div>
            <div className="col">
                <p key={element.title.concat("desc")}>{element.description}</p>
            </div>
        </div>)}
    </div>
    )
}

export default Details;
