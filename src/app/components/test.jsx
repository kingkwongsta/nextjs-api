"use client";
import { useState, useEffect } from "react";

export default function Test() {
  const [queryData, setQueryData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("/api/web3/arbitrum");
    const data = await res.json();
    setQueryData(data.result);
    console.log(data.result);
  };

  return (
    <div>
      Hello<div>World</div>
    </div>
  );
}
