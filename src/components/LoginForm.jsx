"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      console.log("res", res);

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" w-1/4 shadow-lg rounded-lg p-5 border-t-2 border-red-500">
        <h1 className="text-2xl font-bold my-3">Login</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            className="py-2 px-6 w-400 outline-none border-2 border-gray-400"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="py-2 px-6 mt-2 w-400 outline-none border-2 border-gray-400"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            required
          />
          {error && (
            <div className="bg-red-500 text-sm  mt-5 px-3 py-1 rounded-lg w-fit  text-white">
              {error}
            </div>
          )}
          <Link href="/register" className="text-sm text-right mt-3">
            Dont't have account ? <span className="underline">Register</span>
          </Link>
          <button className="p-3 mt-2 bg-green-500 text-white font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
