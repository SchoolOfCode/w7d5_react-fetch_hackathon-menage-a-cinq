import React, { useState, useEffect } from "react";
import soundfile from '../../../src/BAAAA.mp3';
import goatArray from '../../goatArray';

//states


function Quote({ refresh, isCorrect }) {
  const [quoteApi, setQuoteApi] = useState("");
  //const [goat, setGoat] = useState(null);
 

  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 1000);

    async function sendFetch() {
      let response = await fetch(process.env.REACT_APP_QUOTE_API_URL);
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



  if (isCorrect) {
    return (
      <div className="quote">
        <h2>{quoteApi.text} </h2>
        <p>{quoteApi.author} </p>
      </div>
    );
  } else if (isCorrect === false) {
    return (
      <div>
      <img alt="goat" width="400px" src={goatArray[Math.round(Math.random()*goatArray.length)]}></img>
      <br/>
      <audio className="audio-element" src="https://www.fesliyanstudios.com/play-mp3/6543" controls autoPlay/>
   </div>
    );
  } else {
    return null;
  }
}

export default Quote;
