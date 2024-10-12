import connectMongoDB from "@/lib/mongodb";
import Itinarie from "@/models/itinarie";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const itinerary = await Itinarie.findOne({ _id: id });
  return NextResponse.json({ itinerary }, { status: 200 });
}
// request,一定要加
