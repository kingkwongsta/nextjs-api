"use client";
import { useState, useEffect } from "react";

// 4OaFk7STzmZ2D2ElyiKupVSbXyPqRwaJ

export default function NFT() {
  const [nftData, setNftData] = useState();

  useEffect(() => {
    getData();
  }, []);

  function showState() {
    console.log(nftData);
  }

  const getData = async () => {
    const res = await fetch(
      "https://api.dune.com/api/v1/query/2435066/results?api_key=4OaFk7STzmZ2D2ElyiKupVSbXyPqRwaJ"
    );
    const data = await res.json();
    setNftData(data.result);
  };

  return (
    <div className="m-10">
      <button onClick={showState} className="border-2 p-3">
        What is in State
      </button>
    </div>
  );
}
