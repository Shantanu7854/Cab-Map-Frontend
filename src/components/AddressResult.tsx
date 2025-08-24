interface AddressResultProps {
  data: any;
}

const AddressResult = ({ data }: AddressResultProps) => {
  if (data.error) {
    return <p className="mt-4 text-red-500">{data.error}</p>;
  }

  return (
    <div className="mt-6 p-4 border rounded-lg bg-gray-50">
      <h2 className="text-lg font-semibold mb-2">Resolved Address</h2>
      <p><strong>Address:</strong> {data.address}</p>
      <p><strong>Latitude:</strong> {data.latitude}</p>
      <p><strong>Longitude:</strong> {data.longitude}</p>
      <p><strong>Original URL:</strong> <a href={data.short_url} className="text-blue-600 underline" target="_blank">{data.short_url}</a></p>
      <p><strong>Expanded URL:</strong> <a href={data.long_url} className="text-blue-600 underline" target="_blank">{data.long_url}</a></p>
    </div>
  );
};

export default AddressResult;
