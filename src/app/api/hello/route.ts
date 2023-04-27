import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log(process.env.NODE_ENV);
  console.log("hello there");
  // return new Response("Hello, Next.js!");
  return NextResponse.json({ key: "value" });
}
