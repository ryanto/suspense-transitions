import { useEffect, useRef } from "react";

export const useTimeout = (callback, delay) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
};
