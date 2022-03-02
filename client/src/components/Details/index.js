import React from "react";
import { Link } from 'react-router-dom'
import "./style.css";

const Details = (props) => {
  
    const displayedData = props.details;
    /*const { nutritionid } = useParams();
    const { exerciseid } = useParams();
    const { meditationid} = useParams();
    */
  /* const setDetails = () => {
     useState({boolDetails: false})};
*/
    //console.log(props.details.boolDetails);

    return(
        <div className="container pb-5">
    
    <div className="row"> {displayedData.map((card) =>
    <div className="card col-3 mx-3"  key={card.title.concat("-div")}>
    <img className="card-img-top imgstyle"  src="/logo192.png" alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{card.title}</h5>
      <p className="card-text">{card.description}</p>
      <Link to={card._id} className="btn btn-primary">More Details</Link>
    </div>
  </div>)}
  </div>
  </div>
    )
}


export default Details;
