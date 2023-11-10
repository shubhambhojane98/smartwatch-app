import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Login = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session);

  if (session) redirect("/dashboard");

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
