import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 py-14 text-white">
      <div className="container grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-black">Digital Den Austin</div>
          <p className="mt-3 max-w-sm text-slate-400">Tested pre-owned electronics with honest condition details and local pickup in North Austin.</p>
        </div>
        <div className="grid gap-3 text-slate-300">
          <Link href="/inventory">Inventory</Link>
          <Link href="/sell">Sell a device</Link>
          <a href="mailto:digitaldenaustin@gmail.com">digitaldenaustin@gmail.com</a>
        </div>
        <div className="text-slate-400 md:text-right">
          <div>dgtechworld.com</div>
          <div className="mt-2">Local pickup only · North Austin, Texas</div>
          <div className="mt-6">© 2026 Digital Den Austin</div>
        </div>
      </div>
    </footer>
  );
}
