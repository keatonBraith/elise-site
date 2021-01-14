import React from "react";
import { useHistory } from "react-router-dom";
// import "./Home.css";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home--header">
        <h1 className="display-2">Explore your Creativity.</h1>
        <h3>Join skill share to watch, play, learn, make, and discover</h3>
        <button
          className="btn btn-success"
          onClick={() => {
            history.push("/auth");
          }}
        >
          Get stated for free
        </button>
      </div>
      <div className="home--categories">
        <h2 className="display-3">Find what fascinates you</h2>
        <h4>Animation, Design, Illustration, Lifestyle, Photos, Business</h4>
        <div className="cards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
