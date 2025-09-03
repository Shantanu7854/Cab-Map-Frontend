import CabBookingForm from "@/components/CabBookingForm";

export default function BookCabPage() {
  return (
    <main className="flex flex-col items-center justify-center px-2 sm:px-4 py-8 bg-transparent">
      <section className="w-full max-w-lg bg-white/90 rounded-2xl shadow-xl p-5 sm:p-10 flex flex-col items-center border border-green-100">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 text-green-700 drop-shadow text-center">
          Book Your Cab
        </h1>
        <p className="mb-6 text-gray-700 max-w-md text-center text-base sm:text-lg">
          Enter pickup and drop locations (Google Maps links) to see the distance and fare. Compare, choose, and ride with confidence!
        </p>
        <CabBookingForm />
      </section>
    </main>
  );
}