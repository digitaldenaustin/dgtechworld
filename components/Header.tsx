import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-3 md:h-20">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-lg font-black text-white md:h-11 md:w-11">
            D
          </div>
          <div className="min-w-0">
            <div className="truncate text-base font-black leading-tight text-slate-950 md:text-lg">
              Digital Den
            </div>
            <div className="hidden text-[10px] font-bold uppercase tracking-[0.24em] text-slate-500 sm:block md:text-xs">
              North Austin
            </div>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold md:flex">
          <Link href="/inventory" className="hover:text-blue-600">Inventory</Link>
          <Link href="/sell" className="hover:text-blue-600">Sell your device</Link>
          <a href="mailto:digitaldenaustin@gmail.com" className="hover:text-blue-600">Contact</a>
        </nav>
        <Link
          href="/inventory"
          className="shrink-0 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white transition hover:bg-blue-600 md:px-5"
        >
          <span className="sm:hidden">Inventory</span>
          <span className="hidden sm:inline">Shop inventory</span>
        </Link>
      </div>
    </header>
  );
}
