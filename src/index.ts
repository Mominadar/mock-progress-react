import { useState, useRef, useMemo } from 'react';
import useInterval from "./useInterval";

function useMockProgress() {
  const [progress, setProgress] = useState<number>(0);
  const [timeInterval, setTimeInterval] = useState<number>(500);
  const [manualProgressComplete, setManualProgressComplete] = useState<boolean>(false);
  const increment = useRef<number>(1);

  const upperLimit = useMemo(() => {
    if (manualProgressComplete) {
      return 98;
    } else {
      return 100;
    }
  }, [manualProgressComplete])

  const setFullProgress = () => {
    if (manualProgressComplete) {
      setProgress(100);
    }
  };

  //modify time interval for increments
  const changeTimeInterval = (timeInterval: number) => {
    setTimeInterval(timeInterval);
  };

  //randomly increment progress in increments between 1 and 10
  const changeIncrement = () => {
    increment.current = Math.floor(Math.random() * 10) + 1; 
  };

  const intervalRef = useInterval(() => {
    if (progress + increment.current <= upperLimit) {
      setProgress(progress + increment.current);
      changeIncrement();
    } else {
      setProgress(upperLimit);
      clearInterval(intervalRef.current);
    }
  }, timeInterval);

  return { progress, setFullProgress, changeTimeInterval, setManualProgressComplete };
}

export {useMockProgress};