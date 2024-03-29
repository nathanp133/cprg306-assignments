import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4 bg-white text-black">
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div className="hover underline">
        <div><Link href="/week-2">Week 2</Link></div>
        <div><Link href="/week-3">Week 3</Link></div>
        <div><Link href="/week-4">Week 4</Link></div>
        <div><Link href="/week-5">Week 5</Link></div>
        <div><Link href="/week-6">Week 6</Link></div>
        <div><Link href="/week-7">Week 7</Link></div>
        <div><Link href="week-8">Week 8</Link></div>
      </div>
    </main>
  );
}