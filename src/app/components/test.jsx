"use client";
import { useState, useEffect } from "react";

export default function Test() {
  const [queryData, setQueryData] = useState();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("/api/web3/arbitrum");
    const data = await res.json();
    // setQueryData(data.rows);
    // console.log(data.rows);
    setQueryData(data[0]);
    console.log(data[0]);
  };

  const createRow = () => {
    return queryData.map((x, index) => {
      return <tr key={index}>{x.metadata.column_names[index]}</tr>;
    });
  };

  return (
    <div>{queryData ? <table>{createRow}</table> : <div>No Data</div>}</div>
  );
}
