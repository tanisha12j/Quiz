import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import play from "../assets/play.mp3";
import correct from "../assets/correct.mp3";
import wrong from "../assets/wrong.mp3";

const Trivia = ({data,setstop,quesNo,setquesNo}) => {

  const[question,setQuestion]=useState(null);
  const[selectAnswer,setselectAnswer]=useState(null);
  const[className,setclassname]=useState("answer");
  const [letsplay]=useSound(play);
  const [correctAnswer]=useSound(correct);
  const[wronganswer]=useSound(wrong);

  useEffect(() =>{
    letsplay();
  },[letsplay]);


  useEffect(() =>{
    setQuestion(data[quesNo-1]);
  },[data,quesNo])

  const delay=(duration,callback)=>{
     setTimeout(() =>{
      callback();
     },duration);  
    
  };
  const handleclick =(a) =>{
     setselectAnswer(a);
     setclassname("answer active");
     delay(3000,() => setclassname(a.correct ? "answer correct " :"answer wrong"));

     delay(5000,() => 
     {
      if(a.correct)
      {
        correctAnswer();
        delay(1000,() =>{ 
          setquesNo((prev)=>prev+1);
        setselectAnswer(null);
        });
      }
      else{
        wronganswer();
        delay(1000,() =>{
          setstop(true);
        });
      }
     }
     );
    
  }
  return (
    <div className='trivia'>
       <div className="question">{question?.question}</div>
       <div className="answers">
        {question?.answers.map((a) => (

        <div className= 
        {selectAnswer==a ? className :"answer"}
        onClick={() =>handleclick(a)}>{a.text}
        </div>
        ))}
        </div>      
    </div>
  )
}

export default Trivia
