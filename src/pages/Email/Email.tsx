import React, { useState, useMemo } from "react";
import { useEffect } from "react";

const Email = () => {
  const [count, setCount] = useState<number>(0);

  const plus = (): (() => void) => setCount((c: number) => c + 1);

  const double = useMemo<number>(() => count * 2, [count]);

  useEffect(() => {
    // TODO: do something
  }, []);

  const onPlus = useCallback(() => {}, []);

  useEffect(() => {
    // TODO:
  }, []);

  return (
    <div>
      <h1>title - {double}</h1>
      <p>this is Email component!</p>
      <button onClick={plus}>click</button>
    </div>
  );
};

export default Email;
