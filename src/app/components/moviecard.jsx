"use client";
import { useState } from "react";
import Image from "next/image";

export default function MovieCard({ title, poster }) {
  const [imageExist, setimageExist] = useState(true);

  function handleImageError() {
    console.log(title, " is false");
    setimageExist(false);
  }

  return (
    <>
      {imageExist ? (
        <div>
          <h3>{title}</h3>
          <Image
            onError={handleImageError}
            src={poster}
            width={350}
            height={500}
            alt="poster"
          />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
