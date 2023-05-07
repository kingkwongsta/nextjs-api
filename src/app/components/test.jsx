"use client";
import { useState } from "react";

export default function Test() {
  const [queryData, setQueryData] = useState();

  const fetchData = async () => {
    const res = await fetch("/api/web3/arbitrum");
    const data = await res.json();
    setQueryData(data);
  };

  return (
    <div>
      Hello<div>World</div>
    </div>
  );
}
