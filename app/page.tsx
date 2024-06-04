import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex justify-center items-center mt-4">
      <Link href={"/signup"}>Tap for Signup Page</Link>
    </div>  );
}
