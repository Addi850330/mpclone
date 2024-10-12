import connectMongoDB from "@/lib/mongodb";
import Newnew from "@/models/newnew";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const newnew = await Newnew.findOne({ _id: id });
  return NextResponse.json({ newnew }, { status: 200 });
}
// newnew 要跟對應page 寫一樣
