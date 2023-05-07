"use client";
import { useState, useEffect } from "react";

export default function Test() {
  const [queryData, setQueryData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    // const res = await fetch("/api/web3/arbitrum");
    const res = await fetch(
      "https://api.dune.com/api/v1/query/2443176/results?api_key=n0RcPEOqk5XWb9zX0rRlWUiWKwzS5Nd6"
    );

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
