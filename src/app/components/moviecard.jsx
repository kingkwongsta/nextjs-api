import Image from "next/image";

export default function MovieCard({ title, poster }) {
  return (
    <div className="">
      <div>
        <h3>{title}</h3>
        <Image src={poster} width={350} height={500} alt="poster" />
      </div>
    </div>
  );
}
