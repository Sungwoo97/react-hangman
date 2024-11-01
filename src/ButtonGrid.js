import React from "react";
import Button from "./Button";

const ButtonGrid = ({onclick})=>{
  let letters = [
    'A','B','C','D','E','F','G','H',
    'I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X',
    'Y','Z'
  ];
 

  let buttons = letters.map((letter, idx)=>(
    <Button key={idx} value={letter} onclick={onclick} />   //값만 넘겨준다면 부모에게서 받은 onclick 함수를 바로 실행할 수 있다 
  ));

  return(
    <div className="buttons">
      {buttons}
    </div>
  )
}

export default ButtonGrid;