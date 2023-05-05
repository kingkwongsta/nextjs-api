//MongoImport Commandline = mongoimport --uri mongodb+srv://admin:admin@mongocluster.5ippwgz.mongodb.net/nft --collection test --type csv --headerline --file test.json

"use client";
import { useState, useEffect } from "react";
import importedData from "./../api/nft/nftData";

// 4OaFk7STzmZ2D2ElyiKupVSbXyPqRwaJ

export default function NFT() {
  const [nftData, setNftData] = useState();
  const apiKey = "g8YVZgY4LmKtF2gW0Afip63lEZK7V9as";
  const APIEndpoint = `https://api.dune.com/api/v1/query/2443176/results?api_key=${apiKey}`;
  // const apiKey = process.env.DUNEAPI;
  useEffect(() => {
    // getData();
    // getExample();
  }, []);
  console.log(APIEndpoint);

  function showState() {
    console.log(nftData);
  }

  // async function getExample() {
  //   const data = await exampleData();
  //   setNftData(data);
  // }

  const getData = async () => {
    const res = await fetch(APIEndpoint, apiKey);
    const data = await res.json();
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
