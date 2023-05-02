"use client";
import { useState } from "react";
import Image from "next/image";

export default function MovieCard({ index, title, poster }) {
  const [imageExist, setimageExist] = useState(true);

  // on image load if error then hide movie
  function handleImageError() {
    console.log(
      "the ",
      title,
      "'s movie poster image returns a 404 and will not be included"
    );
    console.log("This is the image file: ", poster);
    setimageExist(false);
  }

  return (
    <>
      {index > 15 ? (
        <></>
      ) : imageExist ? (
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
