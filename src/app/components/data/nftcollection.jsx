// MAYC: 0x60e4d786628fea6478f785a6d7e704777c86a7c6
// BAYC: 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
// Azuki: 0xed5af388653567af2f388e6224dc7c4b3241c544
// Moonbirds: 0x23581767a106ae21c074b2276d25e5c3e136a68b
"use client";
import { useEffect } from "react";

export default function NFTCollection() {
  const addresses = [
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "0x23581767a106ae21c074b2276d25e5c3e136a68b",
  ];

  const allCollectionData = [];
  const URI = process.env.URI;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "671f012a-921d-43d6-9b84-2a2421525c1f",
    },
  };

  function handleClick() {
    console.log(allCollectionData);
  }

  const getData = () => {
    for (let i = 0; i < addresses.length; i++) {
      allCollectionData.push(addresses[i]);
    }
    console.log(allCollectionData);
  };

  getData();

  console.log(URI);

  // fetch('https://api.nftport.xyz/v0/nfts/0x23581767a106ae21c074b2276d25e5c3e136a68b?chain=ethereum&page_number=1&page_size=50&include=metadata&include=file_information&include=rarity&include=last_sale_price&include=all&refresh_metadata=false', options)

  return (
    <div>
      <button onClick={handleClick}>Press Me</button>
    </div>
  );
}
