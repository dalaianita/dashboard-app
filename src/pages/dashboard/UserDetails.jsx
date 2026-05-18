import { useParams } from "react-router-dom";

function UserDetails(){
    const params = useParams();

    return (
       <div>
         <h1>User Details Page</h1>

        <h2>User Id: {params.id}</h2>
       </div>
    )
}

export default UserDetails;