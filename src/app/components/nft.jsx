//MongoImport Commandline = mongoimport --uri mongodb+srv://admin:admin@mongocluster.5ippwgz.mongodb.net/nft --collection test --type csv --headerline --file test.json

"use client";
import { useState, useEffect } from "react";
import NFTItem from "./nftitem";

export default function NFT() {
  const [nftData, setNftData] = useState();
  useEffect(() => {
    getData();
  }, []);

  function showState() {
    console.log(nftData);
  }

  const getData = async () => {
    const res = await fetch("/api/nft");
    const data = await res.json();
    setNftData(data[0].rows);
  };

  function nftElements() {
    return nftData.map((nft, index) => {
      return <NFTItem key={index} link={nft.collection} />;
    });
  }

  return (
    <div className="m-10">
      <button onClick={showState} className="border-2 p-3">
        What is in State
      </button>
      {nftData ? (
        <div className="p-3">Got the Data for the State</div>
      ) : (
        <div className="p3">No Data Yet</div>
      )}
      {nftData ? nftElements() : <div className="p3">No Data Yet</div>}
    </div>
  );
}
