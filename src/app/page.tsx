import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <section className="w-full max-w-2xl bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center mt-16 mb-10 border border-blue-100">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
          Welcome to CabMap 🚖
        </h1>
        <p className="text-gray-700 text-lg sm:text-2xl max-w-xl mx-auto text-center mb-6">
          Your one-stop solution to resolve Google Maps links and book cabs with transparent fares and accurate distances.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/resolve"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-2xl shadow-lg hover:from-blue-600 hover:to-blue-800 transition text-lg"
          >
            Resolve Address
          </Link>
          <Link
            href="/book"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 text-white font-bold rounded-2xl shadow-lg hover:from-green-600 hover:to-green-800 transition text-lg"
          >
            Book Cab
          </Link>
        </div>
        <div className="flex flex-col gap-3 text-gray-600 text-base sm:text-lg">
          <div className="flex items-center gap-2">
            <span className="text-blue-500 text-xl">📍</span>
            Paste any Google Maps link to instantly get the address and coordinates.
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-xl">🚕</span>
            Compare cab fares and book rides with real-time distance calculation.
          </div>
        </div>
      </section>
      <footer className="flex flex-col items-center gap-2 text-gray-400 text-sm mt-4 mb-2">
        <p>
          &copy; {new Date().getFullYear()} CabMap. Made with{" "}
          <span className="text-red-400">♥</span> for commuters.
        </p>
        <Link
          href="https://github.com/Shantanu7854/Cab-Map"
          target="_blank"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.475 2 2 6.475 2 12c0 4.425 2.863 8.175 6.838 9.5.5.088.687-.213.687-.475 0-.237-.012-1.025-.012-1.862-2.512.463-3.162-.613-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.188-.85-.65-.012-.662.787-.012 1.35.725 1.537 1.025.9 1.512 2.338 1.088 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.687-.1-.25-.45-1.288.1-2.675 0 0 .837-.262 2.75 1.025.8-.225 1.65-.338 2.5-.338.85 0 1.7.113 2.5.338 1.912-1.3 2.75-1.025 2.75-1.025.55 1.387.2 2.425.1 2.675.637.7 1.025 1.6 1.025 2.687 0 3.838-2.338 4.688-4.562 4.938.362.312.675.925.675 1.875 0 1.35-.012 2.437-.012 2.775 0 .262.187.575.687.475C19.138 20.175 22 16.425 22 12c0-5.525-4.475-10-10-10Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-medium">Source Code</span>
        </Link>
      </footer>
    </main>
  );
}
