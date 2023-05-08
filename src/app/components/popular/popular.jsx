"use client";
import { useState, useEffect } from "react";
import PopularCard from "./popularcard";

export default function Popular() {
  const [nftData, setNftData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("api/web3/nft/top-eth");
    const data = await res.json();
    console.log("data should be there");
    setNftData(data[0]);
  };

  const renderPopular = () => {
    return nftData.contracts.map((x, index) => {
      return <PopularCard key={index} nft={x} />;
    });
  };

  // function renderPopular() {
  //   const shuffledData: Array<object> = shuffle(data);
  //   // //Randomize collection list
  //   return shuffledData.map((nft, key) => {
  //     return <PopularCard key={key} nft={nft} />;
  //   });
  // }

  // function shuffle(array) {
  //   let m: number = array.length,
  //     t,
  //     i;
  //   // While there remain elements to shuffle…
  //   while (m) {
  //     // Pick a remaining element…
  //     i = Math.floor(Math.random() * m--);

  //     // And swap it with the current element.
  //     t = array[m];
  //     array[m] = array[i];
  //     array[i] = t;
  //   }

  //   return array;
  // }

  return (
    <>
      <div className="mx-36 mt-20 mb-20 font-Josefin">
        <h2 className="text-5xl font-semibold tracking-wider leading-none mb-5">
          Popular Collections
        </h2>
        <h3 className="text-2xl mb-12 font-normal leading-normal font-Josefin">
          Checkout the Top NFT Collections on the Ethereum Network
        </h3>
        <div className="grid min-[949px]:place-items-center min-[950px]:place-items-start min-[1120px]:gap-y-3 min-[650px]:grid-cols-1 min-[950px]:grid-cols-2 min-[1120px]:grid-cols-3 min-[1410px]:grid-cols-4">
          {nftData ? renderPopular() : <h2>No Data</h2>}
        </div>
      </div>
    </>
  );
}
