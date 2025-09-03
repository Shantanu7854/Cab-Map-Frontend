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
      <footer className="text-gray-400 text-sm mt-4 mb-2">
        &copy; {new Date().getFullYear()} CabMap. Made with <span className="text-red-400">♥</span> for commuters.
      </footer>
    </main>
  );
}