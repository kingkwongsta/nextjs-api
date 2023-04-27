import Image from "next/image";

export default function MovieCard({ key, title, poster }) {
  return (
    <div className="flex flex-row">
      <div>
        <h3>{title}</h3>
        <Image src={poster} width={350} height={500} alt="poster" />
      </div>
    </div>
  );
}
