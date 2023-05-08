import { getData } from "../../../../../../lib/mongo/web3_top_nft_eth";
import { NextResponse } from "next/server";

export async function GET() {
  const { nfts, error } = await getData();
  return NextResponse.json(nfts);
  // return new Response("Hello, Next.js!");
}
