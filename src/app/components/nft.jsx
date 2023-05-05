//MongoImport Commandline = mongoimport --uri mongodb+srv://admin:admin@mongocluster.5ippwgz.mongodb.net/nft --collection test --type csv --headerline --file test.json

"use client";
import { useState, useEffect } from "react";
import Nftitem from "./nftitem";

export default function NFT() {
  const [nftData, setNftData] = useState([]);
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

  const nftElements = () => {
    return nftData.map((nft, index) => {
      return (
        <Nftitem
          key={index}
          link={nft.COLLECTION}
          items={nft.ITEMS}
          test={index}
        />
      );
    });
  };

  return (
    <div className="m-10">
      <button onClick={showState} className="border-2 p-3">
        What is in State
      </button>
      {nftData ? (
        <div className="">{nftElements()}</div>
      ) : (
        <div className="p-3">No Data Yet</div>
      )}
    </div>
  );
}
