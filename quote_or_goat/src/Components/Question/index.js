import React, { useState, useEffect } from "react";

const Question = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    async function sendFetch() {
      let response = await fetch(
        "https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean"
      );
      let data = await response.json();
      console.log(data);
      setQuestion(data.results.question);
      setAnswer(data.results.answer);

      return data;
    }
  });

  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default Question;
