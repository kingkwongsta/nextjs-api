import { getRestaurants } from "../../../../lib/mongo/restaurants";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const { restaurants, error } = await getRestaurants();
  return NextResponse.json(restaurants);
}
