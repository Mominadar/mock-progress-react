import { useState, useEffect, useRef } from 'react';
import useInterval from "./useInterval";

export function useMockProgress() {
  const [progress, setProgress] = useState<number>(0);
  const [timeInterval, setTimeInterval] = useState<number>(500);
  const [manualProgressComplete, setManualProgressComplete] = useState<boolean>(false);
  const upperLimit = useRef<number>(manualProgressComplete? 98 : 100);
  const increment = useRef<number>(1);

  const setFullProgress = () => {
    if(manualProgressComplete){
      setProgress(100);
    }
  };

  const setUpperLimit = () =>{
    if(manualProgressComplete){
      upperLimit.current = 98;
    }else{
     upperLimit.current = 100;
    }
  }

  useEffect(()=>{
    setUpperLimit();
  },[manualProgressComplete]);

  //modify time interval for increments
  const changeTimeInterval = (timeInterval: number) => {
    setTimeInterval(timeInterval);
  };

  const changeIncrement = () => {
    increment.current = Math.floor(Math.random() * 10) + 1; //randomly increment progress in increments between 1 and 10
  };

  const intervalRef = useInterval(() => {
    if (progress <= upperLimit.current) {
      setProgress(progress + increment.current <= upperLimit.current? progress + increment.current : upperLimit.current);
      changeIncrement();
    } else {
      clearInterval(intervalRef.current);
    }
  },timeInterval);

  return { progress, setFullProgress, changeTimeInterval, setManualProgressComplete };
}