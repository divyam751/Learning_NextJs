const post = ({ params }) => {
  console.log(params);
  return (
    <div className="container">
      <h1>Post without catch all routes</h1>
    </div>
  );
};

export default post;
