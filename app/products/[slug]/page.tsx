import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, getProduct, products } from "@/lib/products";

export function generateStaticParams() { return products.map((product) => ({ slug: product.slug })); }

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="container py-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          {product.images.map((image, index) => <div key={image} className={`relative overflow-hidden rounded-3xl bg-white ${index === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/3]"}`}><Image src={image} alt={`${product.title} photo ${index + 1}`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" priority={index === 0} /></div>)}
        </div>
        <aside>
          <div className="sticky top-28 card shadow-soft p-7 md:p-9">
            <div className="flex flex-wrap gap-2"><span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase text-emerald-800">Available</span><span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black uppercase text-blue-800">{product.condition}</span></div>
            <h1 className="mt-5 text-4xl font-black leading-tight">{product.title}</h1>
            <div className="mt-5 text-4xl font-black">{formatPrice(product.price)}</div>
            <p className="mt-5 leading-7 text-slate-600">{product.summary}</p>
            <a href={`mailto:digitaldenaustin@gmail.com?subject=${encodeURIComponent(`Purchase request: ${product.title}`)}`} className="mt-7 block rounded-2xl bg-blue-600 px-5 py-4 text-center font-black text-white">Request to purchase</a>
            <div className="mt-8 border-t border-slate-200 pt-7"><h2 className="text-lg font-black">Key details</h2><div className="mt-4 grid gap-3">{product.highlights.map((item) => <div key={item} className="flex gap-3"><span className="text-emerald-600">✓</span><span>{item}</span></div>)}</div></div>
            <div className="mt-8 border-t border-slate-200 pt-7"><h2 className="text-lg font-black">Included</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{product.included.map((item) => <li key={item}>{item}</li>)}</ul></div>
            <div className="mt-8 border-t border-slate-200 pt-7"><h2 className="text-lg font-black">Purchase notes</h2><ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">{product.notes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
