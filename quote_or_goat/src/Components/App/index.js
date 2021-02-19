//import logo from "./logo.svg";
import { useState } from 'react';
import "./App.css";
import Button from "../Button";
import Question from "../Question";
import Header from "../Header";
import Results from "../Results";

function App(){ 
  
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  const[isCorrect, setIsCorrect] = useState("");
  //console.log(`answer${answer}`);
  function checkAnswer (userAnswer) {
    
    //console.log("button clicked");
    console.log(`api answer${answer}`)
    if (userAnswer === answer) {
      setIsCorrect(true);
      console.log(`right${isCorrect}`);  
    }else{
      setIsCorrect(false);
      console.log(`wrong${isCorrect}`);
    };
  }
  
  return (
    <div className="App">
      <Header />
      <Question question={question} answer={answer} setAnswer={setAnswer} setQuestion={setQuestion}/>
      <Button text="true" onClick={()=>checkAnswer("True")}/>
      <Button text="false" onClick={()=>checkAnswer("False")}/>
      <Button text="next question"/>
      <Results />
    </div>
  );
};


export default App;
