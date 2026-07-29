import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = ["Phones", "Gaming", "Cameras", "Laptops", "VR", "Wearables"];

export default function Home() {
  return (
    <>
      <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-black uppercase tracking-widest text-blue-700">Local pickup · North Austin</div>
            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[.95] tracking-tight md:text-7xl">Better used tech. <span className="text-blue-600">Clear condition. Real testing.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">A trust-first electronics marketplace inspired by the best parts of Back Market and Swappa—built around real photos, transparent testing notes, and local pickup.</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/inventory" className="rounded-2xl bg-blue-600 px-6 py-4 font-black text-white shadow-lg shadow-blue-200">Browse inventory</Link>
              <Link href="/sell" className="rounded-2xl border border-slate-300 bg-white px-6 py-4 font-black">Sell your device</Link>
            </div>
          </div>
          <div className="card shadow-soft p-7">
            <div className="text-sm font-black uppercase tracking-widest text-slate-500">Why buyers trust us</div>
            <div className="mt-5 grid gap-4">
              {["Exact-item photos", "Functional testing before listing", "Honest cosmetic notes", "Inspect before paying"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold"><span className="grid h-8 w-8 place-items-center rounded-full bg-emerald-100 text-emerald-700">✓</span>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><div className="text-sm font-black uppercase tracking-widest text-blue-600">Shop by category</div><h2 className="mt-2 text-4xl font-black">Find the right device</h2></div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => <Link key={category} href={`/inventory?category=${category}`} className="card p-5 text-center font-black transition hover:border-blue-400 hover:text-blue-600">{category}</Link>)}
        </div>
      </section>

      <section className="container pb-12">
        <div className="flex items-end justify-between gap-5"><div><div className="text-sm font-black uppercase tracking-widest text-blue-600">Current inventory</div><h2 className="mt-2 text-4xl font-black">Recently added</h2></div><Link href="/inventory" className="font-black text-blue-600">View all →</Link></div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
      </section>

      <section className="container py-16">
        <div className="rounded-[32px] bg-slate-950 p-9 text-white md:p-14">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]"><div><div className="text-sm font-black uppercase tracking-widest text-blue-300">Have a device to sell?</div><h2 className="mt-3 text-4xl font-black">Get a straightforward local offer.</h2><p className="mt-4 max-w-2xl text-slate-300">Send the model, condition, photos and your asking price. No complicated trade-in process.</p></div><Link href="/sell" className="rounded-2xl bg-white px-6 py-4 font-black text-slate-950">Start a device submission</Link></div>
        </div>
      </section>
    </>
  );
}
