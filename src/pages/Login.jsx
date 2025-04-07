import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, getProfile } from "@/services/auth";
import { setAccessToken } from "@/services/api";
import { useAuth } from "@/context/AuthContext";
import { Eye } from "lucide-react";

export default function Login() {
  const { setUser } = useAuth();
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await login(userData.username, userData.password);
      setAccessToken(res.data.accessToken);

      const profile = await getProfile();
      setUser(profile.data);

      navigate("/home");
    } catch (err) {
      setError("Sai tài khoản hoặc mật khẩu!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1800px] m-auto relative flex justify-center gap-10  text-white px-12 ">
      <img
        src="https://cdn.convertri.com/4da13923-2b58-11ed-aeb6-06deec350f13%2Fac08012ae686dd63cdfc96cc304d2b7c9a0d14cb%2F%20white%20logo%20nci.png"
        alt=""
        className="absolute w-[20%] left-10 top-10"
      />
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold mb-4 text-center pb-3">
            Sign in
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col gap-3 text-gray-400"
          >
            <div className="flex flex-col gap-2">
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="text"
                value={userData.username}
                name="username"
                onChange={handleChange}
                className="w-full border text-white border-gray-600 px-5 py-3 pr-10 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#575e6a]"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <label className="block text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  className="w-full border text-white border-gray-600 px-5 py-3 pr-10 rounded-xl focus:outline-none focus:ring-3 focus:ring-[#575e6a]"
                  placeholder="Your password"
                  required
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400">
                  <Eye className="w-5 h-5" />
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value=""
                  class="w-4 h-4 "
                />
                Remember me
              </label>
              <a href="#" className="text-[#78069e] text-sm">
                Forgot password?
              </a>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#78069e] text-white px-2 py-4 rounded-full transform hover:scale-105 transition duration-300 ease-in-out"
            >
              {loading ? "Đang đăng nhập..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-1/2 py-3">
        <img src="/public/Screenshot 2025-04-07 093013.png" alt="" />
      </div>
    </div>
  );
}
