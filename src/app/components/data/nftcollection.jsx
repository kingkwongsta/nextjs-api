//TODO
//Convert to server side render
"use client";
import { useEffect } from "react";

export default function NFTCollection() {
  function handleClick() {
    console.log(allCollectionData);
  }

  const getData = async () => {
    const res = await fetch("api/web3/nft/top-eth");
    const data = await res.json();
    allCollectionData.push(data);

    console.log(allCollectionData);
  };

  getData();

  //process.env.NFTPORT_API

  return (
    <div>
      <button onClick={handleClick}>Press Me</button>
    </div>
  );
}
