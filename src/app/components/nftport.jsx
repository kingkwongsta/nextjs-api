"use client";
import { useState, useEffect } from "react";

export default function Nftport() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  function logState() {
    console.log(apiData);
  }

  const fetchData = async () => {
    try {
      const res = await fetch("api/web3/nft/top-eth");
      const data = await res.json();
      console.log("executed try");
      setApiData(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {apiData ? <h2>Got Data</h2> : <h2>No Data</h2>}
      <button className="border-2 p-3" onClick={logState}>
        Hello
      </button>
    </div>
  );
}
