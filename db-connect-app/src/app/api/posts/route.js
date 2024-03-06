import connectDB from "@/lib/connectDB";
import { NextResponse } from "next/server";
import PostModel from "@/models/post";

export async function GET(req) {
  try {
    const result = await PostModel.find();
    await connectDB();
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Something went wrong" }, { status: 400 });
  }
}
