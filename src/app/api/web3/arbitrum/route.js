import { getData } from "../../../../../lib/mongo/web3_arbitrum";
import { NextResponse } from "next/server";

export async function GET() {
  const { transactions, error } = await getData();
  return NextResponse.json(transactions);
  // return new Response("Hello, Next.js!");
}
