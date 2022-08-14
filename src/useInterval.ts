import { useRef, useEffect } from "react";

export default function useInterval(callback: any, delay: number) {
  const intervalRef = useRef<number>();
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
      intervalRef.current = window.setInterval(
        () => callbackRef.current(),
        delay
      );
      return () => window.clearInterval(intervalRef.current);
  }, [delay]);

  return intervalRef;
}
