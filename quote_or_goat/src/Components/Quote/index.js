import React, { useState, useEffect } from "react";

//states


function Quote({refresh}) {

  const [quoteApi, setQuoteApi] = useState("");

  
  useEffect(() => {
    
    let randomNum = Math.floor(Math.random()*1000)  
    
    async function sendFetch() {
      let response = await fetch(
        "https://type.fit/api/quotes"
      );
      let data = await response.json();
      //console.log(data.results[0].question);
      //console.log(data[Math.floor(Math.random()*1000)]);  
      //console.log(data.results[0].correct_answer);
      //setQuoteApi(data[0].content.rendered);
      setQuoteApi(data[randomNum]);
      console.log(quoteApi);
    }
    sendFetch();
  },[refresh]);

//   var regex = /(<([^>]+)>)/ig
// ,   body = "<p>test</p>"
// ,   result = body.replace(regex, "");
// console.log(result);


  return (
    <div className="quote">

      <h2>{quoteApi.text} </h2>
      <p>{quoteApi.author} </p>

    </div>
  );
};

export default Quote;
