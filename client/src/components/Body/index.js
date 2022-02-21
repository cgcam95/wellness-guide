import React from "react";
import "./style.css";
import food from "./food-pyramid.jpg";
import meditation from "./meditation.jpg";
import exercise from "./exercise.jpg";
import { Link } from "react-router-dom";

const Body = () => {
    return(
        <div className="container pb-5">
            <div className="row">
                <Link to="/nutrition"><h2 className="pb-2 text-decoration-underline" id="nutrition">Nutrition</h2></Link> 
            </div>
            <div className="row pt-1 pb-4">
                <div className="col">
                    <img src={food} alt="food"></img>
                </div>
                <div className="col">
                    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus non erat et semper. Mauris lacinia porttitor euismod. Donec dapibus, turpis quis aliquam condimentum, quam magna pharetra quam, id imperdiet risus tortor non lacus. Morbi eu tincidunt magna, eget lacinia arcu. Donec consequat, nunc non hendrerit egestas, tortor mauris dapibus tellus, at ullamcorper massa neque vel neque. Mauris congue dolor iaculis, blandit nulla id, consequat tortor. Vestibulum sed viverra odio. Donec ut consequat enim.

Maecenas ut ipsum tincidunt lectus vulputate sodales id vitae tellus. Donec nisi risus, bibendum ultricies ullamcorper quis, accumsan in nunc. Nam vitae vestibulum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tincidunt non orci non porttitor. Phasellus et metus vitae ligula eleifend fringilla at non dolor. Nunc egestas gravida felis vel viverra. Vivamus euismod ligula accumsan, luctus neque ac, lacinia lectus. Cras tincidunt porta purus id pretium. Sed volutpat ex vel orci congue pellentesque.</p>
                </div>
            </div>
            <div className="row pt-5 border-top">
                <Link to="/meditation"><h2 className="pb-2 text-decoration-underline" id="meditation">Meditation</h2></Link>
            </div>
            <div className="row pt-1 pb-4">
                <div className="col">
                    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus non erat et semper. Mauris lacinia porttitor euismod. Donec dapibus, turpis quis aliquam condimentum, quam magna pharetra quam, id imperdiet risus tortor non lacus. Morbi eu tincidunt magna, eget lacinia arcu. Donec consequat, nunc non hendrerit egestas, tortor mauris dapibus tellus, at ullamcorper massa neque vel neque. Mauris congue dolor iaculis, blandit nulla id, consequat tortor. Vestibulum sed viverra odio. Donec ut consequat enim.

Maecenas ut ipsum tincidunt lectus vulputate sodales id vitae tellus. Donec nisi risus, bibendum ultricies ullamcorper quis, accumsan in nunc. Nam vitae vestibulum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tincidunt non orci non porttitor. Phasellus et metus vitae ligula eleifend fringilla at non dolor. Nunc egestas gravida felis vel viverra. Vivamus euismod ligula accumsan, luctus neque ac, lacinia lectus. Cras tincidunt porta purus id pretium. Sed volutpat ex vel orci congue pellentesque.</p>
                </div>
                <div className="col">
                    <img src={meditation} alt="meditation"></img>
                </div>
            </div>
            <div className="row pt-5 border-top">
                <Link to ="/exercise"><h2 className="pb-2 text-decoration-underline" id="exercise">Exercise</h2></Link>
            </div>
            <div className="row pt-1 pb-4">
                <div className="col">
                    <img src={exercise} alt="exercise"></img>
                </div>
                <div className="col">
                    <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur maximus non erat et semper. Mauris lacinia porttitor euismod. Donec dapibus, turpis quis aliquam condimentum, quam magna pharetra quam, id imperdiet risus tortor non lacus. Morbi eu tincidunt magna, eget lacinia arcu. Donec consequat, nunc non hendrerit egestas, tortor mauris dapibus tellus, at ullamcorper massa neque vel neque. Mauris congue dolor iaculis, blandit nulla id, consequat tortor. Vestibulum sed viverra odio. Donec ut consequat enim.

Maecenas ut ipsum tincidunt lectus vulputate sodales id vitae tellus. Donec nisi risus, bibendum ultricies ullamcorper quis, accumsan in nunc. Nam vitae vestibulum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed tincidunt non orci non porttitor. Phasellus et metus vitae ligula eleifend fringilla at non dolor. Nunc egestas gravida felis vel viverra. Vivamus euismod ligula accumsan, luctus neque ac, lacinia lectus. Cras tincidunt porta purus id pretium. Sed volutpat ex vel orci congue pellentesque.</p>
                </div>
            </div>
        </div>
    )
}

export default Body;