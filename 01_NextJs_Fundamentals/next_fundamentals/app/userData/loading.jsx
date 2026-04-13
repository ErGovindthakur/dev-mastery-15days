const Loading = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="w-64 h-40 bg-gray-800 animate-pulse rounded-md"
        />
      ))}
    </div>
  );
};

export default Loading;