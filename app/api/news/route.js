import connectMongoDB from "@/lib/mongodb";
import Newnew from "@/models/newnew";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const newnews = await Newnew.find();
  return NextResponse.json({ newnews });
}
