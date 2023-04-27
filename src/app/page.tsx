import Image from "next/image";
import { Inter } from "next/font/google";
// import Button from "./components/button";
import Test from "./components/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>WHAT</h2>
        <Test />
      </div>
    </main>
  );
}
