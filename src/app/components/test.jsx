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
    // setQueryData(data.rows);
    // console.log(data.rows);
    setQueryData(data[0].rows);
    console.log(data[0].rows);
  };

  return (
    <div>
      Hello<div>World</div>
    </div>
  );
}
