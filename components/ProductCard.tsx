import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block h-full overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative w-full overflow-hidden bg-slate-100">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={900}
          height={675}
          className="aspect-[4/3] h-auto w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        <span className="absolute left-4 top-4 rounded-full bg-emerald-700 px-3 py-1.5 text-xs font-black uppercase tracking-wide text-white">
          Available
        </span>
      </div>

      <div className="flex min-h-[230px] flex-col p-5">
        <div className="text-xs font-bold uppercase tracking-widest text-blue-600">
          {product.category} · {product.condition}
        </div>

        <h3 className="mt-2 text-xl font-black leading-tight text-slate-950">
          {product.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
          {product.summary}
        </p>

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <span className="text-2xl font-black text-slate-950">
            {formatPrice(product.price)}
          </span>

          <span className="text-sm font-bold text-blue-600">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}