const fetchData = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  if (!res.ok) {
    throw new Error("faild to fetch data");
  }
  const data = await res.json();
  return data.data;
};

const GetData = async () => {
  const data = await fetchData();
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

export default GetData;
