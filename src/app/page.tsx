import Image from "next/image";
import { Inter } from "next/font/google";
import { GET } from "./../app/api/movies/route";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function handleClick() {
    console.log(GET);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <button onClick={handleClick}> HELLO </button>
        <h2>WHAT</h2>
      </div>
    </main>
  );
}
