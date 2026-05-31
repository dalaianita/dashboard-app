import { Link, useSearchParams } from "react-router-dom";
import SearchBox from "../../components/Searchbox";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const users = [
    { id: 1, name: "Anita" },
    { id: 2, name: "Sangam" },
    { id: 3, name: "Banita" },
  ];

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link
            to={`/dashboard/users/${user.id}`}
            state={user}
            >
            {user.name}
          </Link>
        </div>
      ))}
      {/* <input
        type="text"
        value={search}
        placeholder="Search User"
        onChange={(e) => {
          setSearchParams({ search: e.target.value });
        }}
      /> */}

      <SearchBox 
        search={search}
        onSearchChange={(e)=>{
            setSearchParams({search: e.target.value})
        }}
        />

    </div>
  );
}

export default Users;
