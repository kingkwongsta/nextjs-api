// MAYC: 0x60e4d786628fea6478f785a6d7e704777c86a7c6
// BAYC: 0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d
// Azuki: 0xed5af388653567af2f388e6224dc7c4b3241c544
// Moonbirds: 0x23581767a106ae21c074b2276d25e5c3e136a68b
"use client";

export default async function NFTCollection() {
  const addresses = [
    "0x60e4d786628fea6478f785a6d7e704777c86a7c6",
    "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    "0xed5af388653567af2f388e6224dc7c4b3241c544",
    "0x23581767a106ae21c074b2276d25e5c3e136a68b",
  ];

  const allCollectionData = [];

  const getData = async () => {
    for (let i = 0; i < addresses.length(); i++) {
      allCollectionData.push(addresses[i]);
    }
  };

  return (
    <div>
      <button>Press Me</button>
    </div>
  );
}
