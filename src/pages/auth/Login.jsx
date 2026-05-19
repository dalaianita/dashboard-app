import { useNavigate } from "react-router-dom";

function Login({setIsLoggedIn}) {
  const navigate = useNavigate();

  function handleLogin() {
    setIsLoggedIn(true);

    navigate("/dashboard", {replace: true});
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
