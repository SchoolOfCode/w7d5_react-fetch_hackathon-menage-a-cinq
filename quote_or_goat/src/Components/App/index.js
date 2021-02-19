//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Button from "../Button";
import Question from "../Question";
import Header from "../Header";
import useFetch from "../../Hooks/useFetch";
import useDocumentTitle from "../../Hooks/useDocumentTitle";
import Quote from "../Quote";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [refresh, setRefresh] = useState("");

  const [isCorrect, setIsCorrect] = useState("");
  //console.log(`answer${answer}`);
  function checkAnswer(userAnswer) {
    //console.log("button clicked");
    console.log(`api answer${answer}`);
    if (userAnswer === answer) {
      setIsCorrect(true);
      console.log(`right${isCorrect}`);
    } else {
      setIsCorrect(false);
      console.log(`wrong${isCorrect}`);
    }
  }

  function toggleRefresh() {
    setRefresh(!refresh);
    setIsCorrect(null);
  }

  useDocumentTitle("Happy Goat");

  return (
    <div className="App">
      <Header />
      <Question
        question={question}
        answer={answer}
        setAnswer={setAnswer}
        setQuestion={setQuestion}
        refresh={refresh}
      />
      <Button text="true" onClick={() => checkAnswer("True")} />
      <Button text="false" onClick={() => checkAnswer("False")} />
      <Button text="next question" onClick={toggleRefresh} />

      <Quote isCorrect={isCorrect} refresh={refresh} />
    </div>
  );
}

export default App;
