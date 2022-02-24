import React from "react";
import { Link,useParams } from 'react-router-dom'
import "./style.css";

const Details = (props) => {
    const displayedData = props.details;
    const { id } = useParams();
    return(
        <div className="container pb-5">
    
    <div className="row"> {displayedData.map((card) =>
    <div className="card col-3 mx-3"  key={card.title.concat("-div")}>
    <img className="card-img-top imgstyle"  src="/logo192.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
      <p className="card-text">{card.description}</p>
      <Link to={`nutrition/${id}`} className="btn btn-primary">{id}</Link>
    </div>
  </div>)}
  </div>
  </div>
    )
}


export default Details;
