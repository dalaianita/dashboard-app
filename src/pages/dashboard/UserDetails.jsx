import { useLocation, useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const params = useParams();
  const location = useLocation();
  const user = location.state;
const navigate = useNavigate();
  
  function handleBack(){
    navigate(-1)
  }
  return (
    <div>
      <h1>User Details Page</h1>
      <h2>ID: {user.id}</h2>
      <h2>Name from users page via router state property: {user.name}</h2>
      <h2>User Id(Route params): {params.id}</h2>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
}

export default UserDetails;
