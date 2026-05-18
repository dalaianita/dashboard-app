import { Link } from "react-router-dom";

function Users(){
const users = [
    {id:1, name: 'Anita'},
    {id:2, name: 'Sangam'},
    {id:3, name: 'Banita'}
];

    return (
        <div>
            <h1>Users</h1>
            {users.map((user)=>(
                <div key={user.id}>
                    <Link to={`/dashboard/users/${user.id}`} >{user.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Users;