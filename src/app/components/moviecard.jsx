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
          <Image
            onError={handleImageError}
            src={poster}
            width={175}
            height={250}
            alt="poster"
          />
          <h3>{title}</h3>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
