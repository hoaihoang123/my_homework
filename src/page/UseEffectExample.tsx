import React, { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  email: string;
}
const UseEffectExample = () => {
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return <div>{time.toLocaleTimeString()}</div>;
};

export default UseEffectExample;
