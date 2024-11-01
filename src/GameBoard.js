import React, { useState } from "react";
import LetterGrid from "./LetterGrid";
import ButtonGrid from "./ButtonGrid";


const GameBoard = ({secretWord, maxError, answerLength})=>{
  const [ guessedLetters, setGuessedLetters ] = useState([]);
  const [ errorCount, setErrorCount ] = useState(0);

  let clickHandler = (value)=>{
    let val = value.toLowerCase();
    let secret = secretWord.toLowerCase();
    /*
    let guessArr = [...guessedLetters];   //복사본 생성
    guessArr.push(val);                   //복사본 값 추가
    setGuessedLetters(guessArr);          //기존 배열을 복사본 배열로 변경
    */
    setGuessedLetters(prev=>[...prev,val]);   
    // 기존의 배열을 인수 prev로 받고 스프레드 연산자로 풀어둔 prev에 val값을 추가하고 
    // return된 스프레드 연산자로 풀어둔 prev에 val값을 기존의 배열을 변경
    // 틀리면 errorCount 증가
    if(secret.indexOf(val) === -1){
      setErrorCount(n => n + 1);
    }
  }
  let reset = ()=>{
    setErrorCount(0);
    setGuessedLetters([]);
    let buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(item=>{
      item.classList.remove('hidden');
    })
  }

  return(
    <>
      {errorCount < maxError ? 
        <div className={secretWord ? '' : 'hidden'}>
          틀린 횟수 : {errorCount} / {maxError}
          <LetterGrid secretWord={secretWord} complete={reset} guessedLetters={guessedLetters} answerLength={answerLength} />
          <ButtonGrid onclick={clickHandler}/> 
        </div> 
        :
        <button className={secretWord ? '' : 'hidden'} onClick={()=>{
          setErrorCount(0);
          setGuessedLetters([]);
        }} >Retry</button>
      }
    </>
  )
}

export default GameBoard;