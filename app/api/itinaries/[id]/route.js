import connectMongoDB from "@/lib/mongodb";
import Itinarie from "@/models/itinarie";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const itinarie = await Itinarie.find({ tag: `${id}` });
  return NextResponse.json({ itinarie }, { status: 200 });
}
