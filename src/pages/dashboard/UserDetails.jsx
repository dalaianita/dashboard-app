import { useLocation, useParams } from "react-router-dom";

function UserDetails() {
  const params = useParams();
//   const location = useLocation();
//   const user = location.state;

  return (
    <div>
      <h1>User Details Page</h1>

      <h2>User Id: {params.id}</h2>
    </div>
  );
}

export default UserDetails;
