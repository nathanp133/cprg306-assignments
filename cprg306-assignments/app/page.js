import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-white text-black">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">Week 2</Link>
    </main>
  );
}