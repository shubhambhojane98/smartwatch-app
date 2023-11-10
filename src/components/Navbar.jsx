"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();

  console.log(session);

  return (
    <div className="flex justify-around p-2 bg-black">
      <h1 className="text-white text-lg">MyWatch</h1>
      <ul className="flex">
        <Link href="/">
          <li className=" text-white">Home</li>
        </Link>
        <li className="pl-6 text-white">Products</li>
        <li className="pl-6 text-white">About</li>
        <li className="pl-6 text-white">Contact</li>
      </ul>
      <ul className=" flex">
        {session.status === "unauthenticated" ? (
          <Link href="/login">
            <li className="text-white">Login</li>
          </Link>
        ) : (
          <Link href="/">
            <li className="text-white" onClick={() => signOut()}>
              Logout
            </li>
          </Link>
        )}
        <li className="pl-4 text-white">Cart</li>
      </ul>
    </div>
  );
};

export default Navbar;
