import GetData from "./components/GetData";
import GetData2 from "./components/GetData2";
import PostData1 from "./components/PostData1";
import PostData2 from "./components/PostData2";

export const metadata = {
  title: "Blog Post",
  description: "This is blog post all ",
};

export default function Home() {
  return (
    <div>
      {/* <GetData /> */}
      {/* <PostData1 /> */}
      <PostData2 />
      <GetData2 />
    </div>
  );
}
