import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
    });
    login(res.data.token);
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold">Login</h2>

        <input
          className="mb-3 w-full border p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="mb-4 w-full border p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded bg-indigo-600 p-2 text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}
