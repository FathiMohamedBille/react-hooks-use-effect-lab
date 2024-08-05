import React, { useState, useEffect } from 'react';
 const Question = ({ onAnswered }) => { const [timeRemaining, setTimeRemaining] = useState(10);
useEffect(() => {
const timerId = setTimeout(() => {
setTimeRemaining(prevTime => { 
if (prevTime === 1) { 
onAnswered(false); return 10;} return prevTime - 1; }); }, 1000);
  return () => clearTimeout(timerId);
 },
  [timeRemaining, onAnswered]);
  return ( <div> <h2>{timeRemaining} seconds remaining</h2> 
  </div> 
  );
 };
  export default Question;
