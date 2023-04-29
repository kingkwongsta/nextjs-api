"use client";
import { useState, useEffect } from "react";

export default function Restaurants() {
  const [restData, setRestData] = useState();

  useEffect(() => {
    fetchRestData();
  }, []);

  const fetchRestData = async () => {
    const data = await fetch("/api/restaurants");
    console.log(data);
  };
  return (
    <div>
      <h2>Restaurants Data</h2>
    </div>
  );
}
