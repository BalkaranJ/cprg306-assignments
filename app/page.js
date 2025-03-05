import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>My Assignments</h1>
      <p><Link href="/week-2" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 2</Link></p>
      <p><Link href="/week-3" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 3</Link></p>
      <p><Link href="/week-4" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 4</Link></p>
      <p><Link href="/week-5" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 5</Link></p>
      <p><Link href="/week-6" style={{ color: 'blue', textDecoration: 'underline'}}>Go To Week 6</Link></p>

    </div>
  );
}
