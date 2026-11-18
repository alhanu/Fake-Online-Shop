import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="w-24 sm:w-40"></div>

        <Link
          href="/"
          className="border-2 border-gray-500 bg-white px-4 sm:px-10 py-2 font-bold tracking-widest text-gray-700"
        >
          LOGO
        </Link>

        <div className="w-24 sm:w-40"></div>
      </div>
    </header>
  );
}
