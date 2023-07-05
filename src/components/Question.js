import React from "react";
import { useState } from "react";
import "./Question.css";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  // TO NAVIGATE BTWN PAGES
  const navigate = useNavigate();
  // IF USER SELECTED CORRECT ANSWER MAKE IT GREEN
  //IF USER SELECTED WRNG ANSWER MAKE IT RED AND CORRECT ONE GREEN
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) {
      return "select";
    }
  };
  // IF USER SELECTED CORRECT ANSWER INCREASE SCORE
  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };
  //If at the last question move to result
  //If at middle move to next question
  //Else throw error
  const handleNext = () => {
    if (currQues > 8) {
      navigate("/Result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError("Please select an option first");
    }
  };
  return (
    <div>
      <div className="progressBox">
        <div className="progressBoxinner">
          <h5 className="h5">{currQues + 1}/10</h5>
          <img src={require("./Item.png")} className="imag" />
        </div>
      </div>

      <div className="question">
        <h2>{questions[currQues].question}</h2>
      </div>
      <div className="options">
        {/* HANDLING ERROR MESSAGE AND QUESTIONS */}

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {options &&
          options.map((i) => (
            <button
              onClick={() => handleCheck(i)}
              className={`singleOption ${selected && handleSelect(i)}`}
              key={i}
              disabled={selected}
            >
              {i}
            </button>
          ))}
      </div>
      <div className="controls">
        <button onClick={handleNext} className="buttonNext">
          Next
        </button>
        <img src={require("./next.png")} alt="" className="nextImage" />
      </div>
    </div>
  );
};

export default Question;
