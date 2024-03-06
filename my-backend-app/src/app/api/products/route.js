import { NextResponse } from "next/server";

export async function GET(req) {
  //   console.log(req);

  //   const requestHeaders = new Headers(req.headers);
  //   console.log(requestHeaders);

  // Query Params

  //   const { searchParams } = new URL(req.url);
  //   console.log(searchParams);

  // OR

  //   const searchParams = req.nextUrl.searchParams.get("search");
  //   console.log(searchParams);

  //  Cookies

  const cook1 = req.cookies;
  console.log("cookies: ", cook1);
  return NextResponse.json({ msg: "Hello Next.js API" });
}

export async function POST(req) {
  // const res = await req.json();
  // console.log("res:", res);

  const formData = await req.formData();
  console.log("formData", formData);

  return NextResponse.json({ msg: "Post request successful" }, { status: 201 });
}
