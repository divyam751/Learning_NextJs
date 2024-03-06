import connectDB from "@/lib/connectDB";
import PostModel from "@/models/post";

const GetData2 = async () => {
  await connectDB();
  const data = await PostModel.find();
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <h4>{item.body}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default GetData2;
