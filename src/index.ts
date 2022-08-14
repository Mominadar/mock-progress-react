import { useState, useRef, useMemo, useCallback } from "react";
import useInterval from "./useInterval";

interface MockProgressProps {
  timeInterval?: number;
  autoComplete?: boolean;
}

const DEFAULT_TIME_INTERVAL = 500;
const DEFAULT_AUTO_COMPLETE = true;

interface MockProgressReturnType {
  progress: number;
  start: () => void;
  finish: () => void;
}

function useMockProgress(props?:MockProgressProps): MockProgressReturnType {
  const timeInterval = props?.timeInterval?? DEFAULT_TIME_INTERVAL;
  const autoComplete = props?.autoComplete ??  DEFAULT_AUTO_COMPLETE;
  
  const [progress, setProgress] = useState<number>(0); // progress value
  const increment = useRef<number>(1);  // increment for progress value update
  const shouldProgress = useRef(false); // manage start, finish progress callbacks

  // max value progress will reach automatically
  // if auto complete off,
  const upperLimit = useMemo(() => {
    return autoComplete ? 100 : 98;
  }, [autoComplete]);

  // randomly increment progress in increments between 1 and 10
  const changeIncrement = useCallback(() => {
    increment.current = Math.floor(Math.random() * 10) + 1;
  }, []);

  // create interval to update progress
  const intervalRef = useInterval(() => {
    if (shouldProgress.current) {
      if (progress + increment.current <= upperLimit) {
        setProgress(progress + increment.current);
        changeIncrement();
      } else {
        setProgress(upperLimit);
        clearInterval(intervalRef.current);
        intervalRef.current = undefined;
      }
    }
  }, timeInterval);

  // complete progress and clear interval
  const finish = useCallback(() => {
    setProgress(100);
    shouldProgress.current = false;
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  }, [intervalRef]);

  // start progress
  const start = useCallback(() => {
    if (intervalRef.current) {
      shouldProgress.current = true;
      setProgress(0);
    }
  }, [intervalRef]);

  return { progress, start, finish };
}

export { useMockProgress };
