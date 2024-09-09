// import React from 'react';

import { Children } from "react";

function Wrapper({Children}) {
  const style = {
    border: '2px solid black',
    padding: '16px',
  };
  return (
    <div style={style}>
      {Children}
    </div>
  )
}
export default Wrapper;