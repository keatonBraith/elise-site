import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home--header">
        <h1>Explore your Creativity.</h1>
        <p>Join skill share to watch, play, learn, make, and discover</p>
        <button onClick={() => history.push("/signup")}>
          Get stated for free
        </button>
      </div>
      <div className="home--categories">
        <h1>Find what fascinates you</h1>
        <p>Animation, Design, Illustration, Lifestyle, Photos, Business</p>
      <div className="cards">
          <span className="card"></span>
          <span className="card"></span>
          <span className="card"></span>
          <span className="card"></span>
      </div>

      </div>
    </>
  );
};

export default Home;
