import { ProductCard } from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function InventoryPage() {
  return (
    <div className="container py-14">
      <div className="max-w-3xl"><div className="text-sm font-black uppercase tracking-widest text-blue-600">Live inventory</div><h1 className="mt-3 text-5xl font-black">Tested electronics available now</h1><p className="mt-5 text-lg leading-8 text-slate-600">Every listing uses photos of the exact item and clear notes about condition, testing, and included accessories.</p></div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{products.map((product) => <ProductCard key={product.slug} product={product} />)}</div>
    </div>
  );
}
