"use client";
import { useState, useEffect } from "react";
export default function Nftport() {
  const [apiData, setApiData] = useState();

  useEffect(() => {
    getData();
  }, []);

  function logState() {
    console.log(apiData);
  }
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "671f012a-921d-43d6-9b84-2a2421525c1f",
    },
  };

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.nftport.xyz/v0/contracts/top?page_size=100&page_number=1&period=24h&order_by=volume&chain=ethereum&chain=polygon",
        options
      );
      const data = await res.json();
      console.log("executed try");
      setApiData(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {apiData ? <h2>Got Data</h2> : <h2>No Data</h2>}
      <button className="border-2 p-3" onClick={logState}>
        Hello
      </button>
    </div>
  );
}
