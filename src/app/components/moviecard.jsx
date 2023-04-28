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
        <div className="w-[162.5px] h-[330px]">
          <div className="max-w-[162.5px] max-h-[261px] mb-[5px] h-[261px]">
            <Image
              className="object-cover"
              onError={handleImageError}
              src={poster}
              width={162.5}
              height={261}
              alt="poster"
            />
          </div>
          <h3>{title}</h3>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
