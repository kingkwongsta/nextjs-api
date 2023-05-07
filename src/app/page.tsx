import Image from "next/image";
import { Inter } from "next/font/google";
import Movie from "./components/movie";
import Restaurants from "./components/restaurants";
import NFT from "./components/nft";
import Test from "./components/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Test />
        {/* <Restaurants />
        <Movie /> */}
      </div>
    </main>
  );
}
