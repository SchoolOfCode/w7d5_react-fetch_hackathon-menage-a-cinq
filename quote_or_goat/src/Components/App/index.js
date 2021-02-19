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
  
  function checkAnswer (answer) {
    
    console.log("button clicked");
    if (answer === true) {
      setIsCorrect(true);
      console.log(isCorrect);  
    }else{
      setIsCorrect(false);
      console.log(isCorrect);
    };
  }
  return (
    <div className="App">
      <Header />
      <Question question={question} answer={answer} setAnswer={setAnswer} setQuestion={setQuestion}/>
      <Button text="true" onClick={()=>checkAnswer({answer})}/>
      <Button text="false"/>
      <Button text="next question"/>
      <Results />
    </div>
  );
};


export default App;
