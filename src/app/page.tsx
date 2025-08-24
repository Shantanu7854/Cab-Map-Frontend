import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-12 px-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to CabMap 🚖</h1>
      <p className="text-gray-700 mb-8 max-w-md">
        Easily resolve Google Maps links to precise addresses and book cabs from one location to another.
      </p>
      <div className="flex gap-4">
        <Link
          href="/resolve"
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Resolve Address
        </Link>
        <Link
          href="/book"
          className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Book Cab
        </Link>
      </div>
    </div>
  );
}
