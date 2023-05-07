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

  const createHeader = () => {
    const data = queryData.metadata.column_names;
    const filterData = [data[4]];
    return filterData.map((x, index) => {
      console.log(x);
      return <th key={index}>{x}</th>;
    });
  };
  const createRows = () => {
    return queryData.rows.map((x, index) => {
      console.log(x);
      return (
        <tr key={index}>
          <td>{x.block_number}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      {queryData ? (
        <table>
          <tbody>
            <tr>{createHeader()}</tr>
            {createRows()}
          </tbody>
        </table>
      ) : (
        <div>No Data</div>
      )}
    </div>
  );
}
