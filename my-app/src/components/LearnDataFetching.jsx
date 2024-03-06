async function getData() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
const LearnDataFetching = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.title}</h4>
            <p> {item.description} </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default LearnDataFetching;
