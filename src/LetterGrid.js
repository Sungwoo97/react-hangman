import React, { useEffect, useState } from "react";
import Letter from "./Letter";

const LetterGrid = ({secretWord, guessedLetters, answerLength, complete})=>{
  const [answer, setAnswer ] = useState(0);
  console.log(answer, answerLength);

  //guessedLetters 값이 변경되면 answer를 업데이트
  useEffect(()=>{
    let newCount = [...secretWord].reduce((count, letter) =>{ 
      return count + (guessedLetters.includes(letter.toLowerCase()) ? 1 : 0);
    },0);
    setAnswer(newCount);
  },[guessedLetters])
  //answer 값이 변경되면 answerLength와 비교해서 정답 여부 파악
  useEffect(()=>{
    if(answer === answerLength){
      alert('정답입니다!');
      complete();
    }
  },[answer])

  //let letters = secretWord.split('').map(word=> <span>{word}</span>);
  //secretWord의 문자열 배열로 변환하고, 그 배열에 각각의 값으로
  let letters = [...secretWord].map((letter, idx)=> {
    // let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1 ;
    let isShown = guessedLetters.includes(letter.toLowerCase());
    return( 
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
      ) 
    });    // 스프레드 연산자로 문자열을 바로 배열로 바꿀 수 있다
  
    
  return(
    <div className="letters">
      {letters}
    </div>
  )
}

export default LetterGrid;