import connectMongoDB from "@/lib/mongodb";
import Itinarie from "@/models/itinarie";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const itinaries = await Itinarie.find();
  return NextResponse.json({ itinaries });
}
