import React, { useState } from 'react';

function Counter() {
  const [number, setNumber] = useState(0);
  // use가 붙으면 훅(HOOK)
  // useState 훅을 사용하여 상태(State)를 관리
  // setNumber 는 number에 변경된 값을 지정할 때 한번 거쳐가는 정거장

  const onIncrease = () => {
    // console.log('+1')
    setNumber(number+1);
  }
  const onDecrease = () => {
    // console.log('-1');
    setNumber(number-1);
  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;