"use client";
import { useState, useEffect } from "react";

export default function Restaurants() {
  const [restData, setRestData] = useState();

  useEffect(() => {
    fetchRestData();
  }, []);

  function handleClick() {
    console.log(restData);
  }

  const fetchRestData = async () => {
    const res = await fetch("/api/restaurants");
    const data = await res.json();
    setRestData(data);
    console.log(data);
  };
  return (
    <div>
      <h2>Restaurants Data</h2>
      <ul>
        {restData ? (
          restData.map((x) => {
            return <li key={x._id}>{x.name}</li>;
          })
        ) : (
          <></>
        )}
      </ul>
      <button onClick={handleClick}>Check Restaurants Data</button>
    </div>
  );
}
