import { getData } from "../../../../lib/mongo/nft";
import { NextResponse } from "next/server";

export async function GET() {
  const { nfts, error } = await getData();
  return NextResponse.json(nfts);
  // return new Response("Hello, Next.js!");
}
