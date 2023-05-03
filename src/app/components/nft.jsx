"use client";
import { useState, useEffect } from "react";

// 4OaFk7STzmZ2D2ElyiKupVSbXyPqRwaJ

export default function NFT() {
  const [nftData, setNftData] = useState();

  function showState() {
    console.log(nftData);
  }

  return (
    <div className="m-10">
      <button onClick={showState} className="border-2 p-3">
        What is in State
      </button>
    </div>
  );
}
