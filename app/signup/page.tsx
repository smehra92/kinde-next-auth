"use client";

import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function SignupPage() {
  return (
    <div className=" flex justify-center items-center h-screen">
      <RegisterLink className=" text-black bg-yellow-200 rounded p-2">
        Signup
      </RegisterLink>
    </div>
  );
}
