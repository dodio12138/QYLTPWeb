import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="rounded-3xl border border-orange-200 bg-white p-10 text-center shadow-sm">
      <h1 className="text-4xl font-extrabold text-brand-900">404</h1>
      <p className="mt-3 text-gray-700">Sorry, we could not find that page.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-brand-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-900">
        Back To Home
      </Link>
    </div>
  );
}
