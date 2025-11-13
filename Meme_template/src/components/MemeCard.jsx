export default function MemeCard({ meme }) {
  return (
    <div className="bg-white w-64 rounded-xl shadow hover:shadow-lg transition p-3 cursor-pointer mx-auto">
      <img
        src={meme.url}
        alt={meme.name}
        className="rounded-md w-full h-72 object-cover"
      />
      <p className="mt-3 text-gray-800 font-medium">{meme.name}</p>
    </div>
  );
}
