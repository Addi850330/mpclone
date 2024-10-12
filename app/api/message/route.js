import connectMongoDB from "@/lib/mongodb";

import Message from "@/models/message";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { askinfo, clientname, email, phone, business } = await request.json();
  await connectMongoDB();
  await Message.create({
    askinfo,
    clientname,
    email,
    phone,
    business,
  });
  return NextResponse.json({ message: "訊息發送成功" }, { status: 201 });
}
