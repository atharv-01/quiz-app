import React from "react";
import "./Result.css";
import { useNavigate } from "react-router-dom";
const Result = ({ score }) => {
  const navigate = useNavigate();
  const clickHandler = () => navigate("/");
  return (
    <div className="main">
      <div className="upper">
        {" "}
        <img src={require("./giphy.png")} className="image" />
      </div>
      <div className="result">
        <h4 className="yourResult">Your Result</h4>
        <div className="circular">
          <h4 className="percentage">{(score / 10) * 100}%</h4>
        </div>
      </div>

      <div className="marks">
        <div className="correct">
          <img src={require("./green_dot.png")} className="greenDot" alt="" />
          <div className="textBx">Correct: {score}</div>
        </div>
        <div className="incorrect">
          <img src={require("./red_dot.png")} className="greenDot" alt="" />
          <div className="textBx">Incorrect:{10 - score}</div>
        </div>

        <div className="startAgain">
          <button onClick={clickHandler} className="buttonStart">
            Start Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
