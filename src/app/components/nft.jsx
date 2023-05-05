//MongoImport Commandline = mongoimport --uri mongodb+srv://admin:admin@mongocluster.5ippwgz.mongodb.net/nft --collection test --type csv --headerline --file test.json

"use client";
import { useState, useEffect } from "react";
// import cool from "../../../lib/mongo/nft";

export default function NFT() {
  const [nftData, setNftData] = useState();
  useEffect(() => {
    // getData();
  }, []);

  function showState() {
    console.log(nftData);
  }

  const getData = async () => {
    // const res = await fetch("/api/nft");
    // const data = await res.json();
    setNftData(data);
  };

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
      <h2>testing out the new codespace!</h2>
    </div>
  );
}
