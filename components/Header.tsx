import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-600 text-xl font-black text-white">D</div>
          <div>
            <div className="text-lg font-black">Digital Den</div>
            <div className="text-xs font-bold uppercase tracking-[.2em] text-slate-500">North Austin</div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
          <Link href="/inventory">Inventory</Link>
          <Link href="/sell">Sell your device</Link>
          <a href="mailto:digitaldenaustin@gmail.com">Contact</a>
        </nav>
        <Link href="/inventory" className="rounded-xl bg-slate-950 px-4 py-3 text-sm font-bold text-white">Shop inventory</Link>
      </div>
    </header>
  );
}
