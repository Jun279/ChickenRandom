import styled from "styled-components";
import { useState } from "react";
import './App.css';

const Header = styled.h1`
  margin: 0 auto;
  color: #CCAC00;
  font-size: 4rem;
  font-weight: 700;
`



function App() {
  const [num, setNum] = useState([]);
  const [random, setRandom] = useState(0);

  const generateNumber = () => {
    const randomNumber = Math.floor(Math.random()*10)+1;
    setRandom(randomNumber);
    setNum((previous) => {
      return [...previous, randomNumber]
    });
  }
  
  const resetNum = () => {
    setNum([]);
    setRandom(0);
  }

  return (
    <div className="App">
      <div className="headerBox">
        <Header>🍗치킨 복권🍗</Header>
      </div>
      <div className="countBox">
        <p className="number" style={{margin: "0", marginTop: "1.5rem"}}>{random}</p>
        <div className="buttonBox">
          <button className="button" onClick={generateNumber}>뽑기</button>
          <button className="button" onClick={resetNum}>초기화</button>
        </div>
      </div>
      <div>
        {num.map((num, index) => {
          return <p key={index} className="numText"><span>{index+1}.</span> {num}</p>
        })}
      </div>
    </div>
  );
}

export default App;
