const { NextResponse } = require("next/server");

export const GET = async (req, context) => {
  //   console.log("req:", req);
  //   console.log(context.params.id);
  console.log(context);
  return NextResponse.json(
    {
      msg: "GET Request with aero function and dynamic route",
    },
    { status: 200 }
  );
};
