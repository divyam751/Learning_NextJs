import connectDB from "@/lib/connectDB";
import PostModel from "@/models/post";

const PostData2 = () => {
  const create = async (formData) => {
    "use server";
    await connectDB();
    const res = await PostModel.create({
      title: formData.get("title"),
      body: formData.get("body"),
    });
    console.log(res);
  };
  return (
    <div className="container">
      <form action={create} className="container">
        <label>
          Title
          <input type="text" name="title" placeholder="Enter title" />
        </label>
        <label>
          Body
          <input type="text" name="body" placeholder="Enter body" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostData2;
