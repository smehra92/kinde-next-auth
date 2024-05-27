'use client';

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default async function Signout() {
    return <div>
        <div className=" flex justify-end items-end mt-4">
        <LogoutLink className=" bg-red-500 rounded p-2">Signout</LogoutLink>
      </div>
    </div>
}