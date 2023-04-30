import Image from "next/image";
import { Inter } from "next/font/google";
import Movie from "./components/movie";
import Restaurants from "./components/restaurants";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Restaurants />
        <Movie />
      </div>
    </main>
  );
}
