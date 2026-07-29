export default function SellPage() {
  return (
    <div className="container py-14">
      <div className="mx-auto max-w-3xl">
        <div className="text-sm font-black uppercase tracking-widest text-blue-600">Sell your device</div>
        <h1 className="mt-3 text-5xl font-black">Send the details. Get a local response.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">For this first version, submissions go directly to email. A database-backed upload form will be added in the admin phase.</p>
        <div className="card mt-9 p-7 md:p-10">
          <div className="grid gap-5">
            <div><div className="font-black">Include in your message</div><ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600"><li>Brand and exact model</li><li>Storage, carrier or specifications</li><li>Condition and any defects</li><li>What is included</li><li>Your asking price</li><li>Clear photos</li></ul></div>
            <a href="mailto:digitaldenaustin@gmail.com?subject=Device%20submission" className="rounded-2xl bg-blue-600 px-6 py-4 text-center font-black text-white">Email device details</a>
          </div>
        </div>
      </div>
    </div>
  );
}
