import { useState } from "react";

function InputSample(){
  //함수는 항시 리턴전에
  const[text, setText] = useState('');
  const onChange = (e)=>{
    setText(e.target.value);
    //e벤트 생긴 target(인풋창)의 value(정보&값)
  }
  const onReset = ()=>{
    setText('');
  }

  return (
    <div>
      <input onChange={onChange} value={text}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : {text}</b>
      </div>
    </div>
  );
}
export default InputSample;