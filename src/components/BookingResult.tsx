interface BookingResultProps {
  data: any;
}

const BookingResult = ({ data }: BookingResultProps) => {
  if (data.error) return <p className="mt-4 text-red-500">{data.error}</p>;

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Cab Booking Details</h2>
      <p><strong>Pickup:</strong> {data.pickup.address}</p>
      <p><strong>Drop:</strong> {data.drop.address}</p>
      <p><strong>Distance:</strong> {data.distance.toFixed(2)} km</p>
      <p><strong>Estimated Price:</strong> ₹{data.price.toFixed(0)}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Confirm Booking
      </button>
    </div>
  );
};

export default BookingResult;
