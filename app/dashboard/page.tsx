import Signout from "@/Signout";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {

    const {getUser} = getKindeServerSession()

    const user = await getUser();
    // console.log(user?.email)

    if(!user) return redirect('/signup')

  return (
    <>
      <Signout />
      <div className=" flex justify-center items-center h-screen">
        {user.given_name}
        {user.family_name}
        {user.email}
      </div>
    </>
  );
}
