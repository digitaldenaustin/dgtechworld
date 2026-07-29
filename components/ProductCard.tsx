import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="card group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image src={product.images[0]} alt={product.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="absolute left-4 top-4 rounded-full bg-emerald-700 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">Available</span>
      </div>
      <div className="p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-600">{product.category} · {product.condition}</div>
        <h3 className="mt-2 text-xl font-black leading-tight">{product.shortTitle}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.summary}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-2xl font-black">{formatPrice(product.price)}</span>
          <span className="text-sm font-bold text-blue-600">View details →</span>
        </div>
      </div>
    </Link>
  );
}
