import { getNFTs } from "../../../../lib/mongo/nft";
import { NextResponse } from "next/server";

// const handler = async (req, res) => {
//   if (req.method === "GET") {
//     try {
//       const { movies, error } = await getMovies();
//       if (error) throw new Error(error);
//       return res.status(200).json({ movies });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }
//   res.setHeader("Allow", ["GET"]);
//   res.status(425).end(`Method ${req.method} is no allowed`);
// };
// export default handler;

export async function GET(req, res) {
  const { movies, error } = await getNFTS();
  return NextResponse.json(movies);
}

// export async function GET() {
//   return new Response("Hello, Next.js!");
// }
