"use client";
import { useState } from "react";

const PostData1 = () => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log("Response:", res);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="container">
        <label>
          Title
          <input
            type="text"
            name="title"
            placeholder="Enter title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Body
          <input
            type="text"
            name="body"
            placeholder="Enter body"
            value={formData.body}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostData1;
