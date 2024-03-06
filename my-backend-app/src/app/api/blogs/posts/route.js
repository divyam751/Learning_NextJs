import { NextResponse } from "next/server";

export const GET = async (req) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "aplication/json", //api key or anyother headers
    },
  });
  const post = await res.json();

  return NextResponse.json({ data: post });
};
