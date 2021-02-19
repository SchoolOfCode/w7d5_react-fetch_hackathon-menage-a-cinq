import React, { useState, useEffect } from "react";

//states

function Quote({ refresh, isCorrect }) {
  const [quoteApi, setQuoteApi] = useState("");
  //const [goat, setGoat] = useState(null);

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 1000);

    async function sendFetch() {
      let response = await fetch("https://type.fit/api/quotes");
      let data = await response.json();
      //console.log(data.results[0].question);
      //console.log(data[Math.floor(Math.random()*1000)]);
      //console.log(data.results[0].correct_answer);
      //setQuoteApi(data[0].content.rendered);
      setQuoteApi(data[randomNum]);
      console.log(quoteApi);
    }
    sendFetch();
  }, [refresh]);

  //   var regex = /(<([^>]+)>)/ig
  // ,   body = "<p>test</p>"
  // ,   result = body.replace(regex, "");
  // console.log(result);

  // const goatArray = [
  //   "https://farmhouseguide.com/wp-content/uploads/2020/08/two-goats.jpg",
  //   "https://i.pinimg.com/originals/3a/ee/8d/3aee8d3cf15482a8972195ef398a081a.jpg",
  //   "http://i.imgur.com/fekQdRD.jpg",
  // ];

  if (isCorrect) {
    return (
      <div className="quote">
        <h2>{quoteApi.text} </h2>
        <p>{quoteApi.author} </p>
      </div>
    );
  } else if (isCorrect === false) {
    return (
      <img alt="goat" width="600px" src="http://i.imgur.com/fekQdRD.jpg"></img>
    );
  } else {
    return null;
  }
}

export default Quote;
