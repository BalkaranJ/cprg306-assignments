import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Assignments</h1>
      <p><Link href="/week-2" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 2</Link></p>
    </div>
  );
}
