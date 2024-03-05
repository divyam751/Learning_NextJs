const ProfilebyId = ({ params }) => {
  console.log(params);
  return (
    <div className="container">
      <h1>Profile based on ID {params.id} </h1>
    </div>
  );
};

export default ProfilebyId;
