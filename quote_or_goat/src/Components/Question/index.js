import React, { useState, useEffect } from "react";

const Question = ({ question, answer, setQuestion, setAnswer, refresh }) => {
  useEffect(() => {
    async function sendFetch() {
      let response = await fetch(
        process.env.REACT_APP_API_URL
      );
      let data = await response.json();
      //console.log(data.results[0].question);
      setQuestion(data.results[0].question);
      setAnswer(data.results[0].correct_answer);
      //console.log(data.results[0].correct_answer);
      return data;
    }
    sendFetch();
  }, [refresh]);

  return (
    <div className="question">
      <h2>{question}</h2>
    </div>
  );
};

export default Question;
