import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Success");

      window.location.href =
        "/admin/dashboard";

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Login Failed"
      );

    }

  };

  return (

    <div
      style={{
        width: "400px",
        margin: "100px auto"
      }}
    >

      <h2>🌸 Parijatham Admin</h2>

      <form onSubmit={login}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <br /><br />

        <button type="submit">
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;