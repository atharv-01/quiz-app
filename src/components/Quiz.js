import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "./Question";
import { CircularProgress } from "@mui/material";
const Quiz = ({ score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    // console.log(questions);
    //Shuffling so that user do not get same things in same sequence
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  // console.log(options);
  //SHUFFLING LOGIC
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="box">
      <img src={require("./giphy.png")} className="image" />

      <div className="quizSection">
        {/* Show Quiz or Loader (Till the Time API is Loading Data) */}
        {questions ? (
          <>
            <div className="quizInfo">
              <h4 className="scoreBoard">Score : {score}</h4>
            </div>
            {/* Passing as props */}
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
            />
          </>
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={150}
            thickness={1}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
