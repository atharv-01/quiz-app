import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = ({ fetchQuestions }) => {
  const navigate = useNavigate();
  const navigateQuiz = () => {
    // 👇️ navigate to /
    fetchQuestions();
    navigate("/Quiz");
  };
  return (
    <div className="start">
      <div className="logo">
        <img src={require("./logo.png")} className="logoImage" />
      </div>
      <div className="home">
        <div className="circle">
          <div className="circleText">Start</div>
        </div>
        <div className="startButton">
          <button className="btn" onClick={navigateQuiz}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
