//import logo from "./logo.svg";
import "./App.css";
import Button from "../Button";
import Question from "../Question";
import Header from "../Header";
import Results from "../Results";

function App() {
  return (
    <div className="App">
      <Header />
      <Question />
      <Button />
      <Button />
      <Button />
      <Results />
    </div>
  );
}

export default App;
