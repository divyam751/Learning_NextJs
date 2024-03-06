import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/post";

export async function GET(req) {
  try {
    await connectDB();
    const result = await PostModel.find();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}

// Post Request

export async function POST(req) {
  const body = await req.json();
  try {
    await connectDB();
    const result = await PostModel.create(body);
    return NextResponse.json({ data: result }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}
