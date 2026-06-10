import { Link, useSearchParams } from "react-router-dom";
import { useCallback, useMemo, useEffect, useState } from "react";
import SearchBox from "../../components/SearchBox";
import CurrentTime from "../../components/CurrentTime";
const users = [
  { id: 1, name: "Anita" },
  { id: 2, name: "Sangam" },
  { id: 3, name: "Banita" },
];

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const filteredUsers = useMemo(() => {
    console.log("Filterimng users...");

    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  useEffect(() => {
    console.log("Users Page Loaded...");
    document.title = "Users | Dashboard";
    return document.title = "Dashboard App"
  }, []);

  const handleSearchChange = useCallback(
    (e) => {
      setSearchParams({ search: e.target.value });
    },
    [setSearchParams],
  );

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/dashboard/users/${user.id}`} state={user}>
            {user.name}
          </Link>
        </div>
      ))}

      {filteredUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <SearchBox search={search} onSearchChange={handleSearchChange} />

      <CurrentTime />
    </div>
  );
}

export default Users;
