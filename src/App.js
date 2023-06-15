import { useEffect,  useState } from 'react';
import './app.css'
import Trivia  from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
import data from './Data'

function App() {

  const[username,setusername]=useState(null);

  const[timeout,setTimeout]=useState(false);
  const[stop,setstop]=useState(false);
  const[earned,setearned]=useState("$ 0");
 
  const[quesNo,setquesNo]=useState(1);

  const moneyPyramid= [
    { id : 1, amount : "$ 100"},
    { id : 2, amount : "$ 200"},
    { id : 3, amount : "$ 300"},
    { id : 4, amount : "$ 500"},
    { id : 5, amount : "$ 1000"},
    { id : 6, amount : "$ 2000"},
    { id : 7, amount : "$ 4000"},
    { id : 8, amount : "$ 8000"},
    { id : 9, amount : "$ 16000"},
    { id : 10, amount : "$ 32000"},
    { id : 11, amount : "$ 64000"},
    { id : 12, amount : "$ 125000"},
    { id : 13, amount : "$ 250000"},
    { id : 14, amount : "$ 5000000"},
    { id : 15, amount : "$ 10000000"},
  ].reverse();

  useEffect(()=>{
     quesNo > 1 &&
     setearned(moneyPyramid.find((m) =>m.id === quesNo-1).amount);

  },[moneyPyramid,setquesNo])
  return (
    <div className="app"> 
      {username ? ( <> 
        <div className="main">
        {stop  ? (<h1 className='endText'> You earned : {earned}</h1>):(
       <>
       <div className="top">
          <div className="timer">
            <Timer setstop={setstop} quesNo={quesNo}/>
          </div>
        </div>
        <div className="bottom">
         <Trivia data={data} setstop={setstop} setquesNo={setquesNo} quesNo={quesNo}/>
        </div>
        </>
        )}

      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map((m) => (
          <li className={quesNo==m.id ?"moneyListItem active" :"moneyListItem"}> 
          <span className='moneyListItemNumber'>{m.id}</span>
          <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))}
        </ul>
      </div>
      </>) : (<Start setusername={setusername}/>)}
     
    </div>
  );
}

export default App;
