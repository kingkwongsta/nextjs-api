"use client";
import { GET } from "./../api/movies/route";

export default function Button() {
  function handleClick() {
    console.log("hi");
  }
  return (
    <div>
      <button className="border-2 p-2" onClick={handleClick}>
        HELLO
      </button>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await GET();
  return {
    props: {
      data: data,
    },
  };
}
