import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { useState } from "react";
import axios from "axios";

function App() {
  const [questions, setQuestions] = useState("");
  const [score, setScore] = useState(0);
  //Fetching API
  const fetchQuestions = async () => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="App">
        {/* PAGES */}
        <Routes>
          <Route path="/" element={<Home fetchQuestions={fetchQuestions} />} />
          <Route
            path="Quiz"
            element={
              <Quiz
                // Passing as Props
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route path="Result" element={<Result score={score} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
