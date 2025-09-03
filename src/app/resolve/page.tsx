import MapForm from "@/components/MapForm";

export default function ResolvePage() {
  return (
    <main className="flex flex-col items-center justify-center px-2 sm:px-4 py-8 bg-transparent">
      <section className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-5 sm:p-10 flex flex-col items-center border border-blue-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-blue-700 drop-shadow text-center">
          Resolve Google Maps Link
        </h1>
        <p className="mb-6 text-gray-700 max-w-md text-center text-base sm:text-lg">
          Paste a Google Maps link below to instantly get the exact address and coordinates.
        </p>
        <MapForm />
      </section>
    </main>
  );
}