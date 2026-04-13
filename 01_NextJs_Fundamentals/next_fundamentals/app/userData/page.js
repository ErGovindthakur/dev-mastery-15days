import Image from "next/image";
import React from "react";

// Better fetch with caching + error handling
const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 }, // ISR (cache for 60 sec)
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

const UserData = async () => {
  const productData = await fetchData();

  return (
    <div className="w-full grid gap-y-6 gap-x-1 grid-cols-1 md:grid-cols-4 justify-items-center container mx-auto">
      {productData.map((data) => (
        <div
          className="bg-gray-900 rounded-md px-3   py-4 shadow-md w-64 text-white flex flex-col items-center"
          key={data.id}
        >
          <Image
            src={data.image}
            width={120}
            height={120}
            alt={data.title}
            className="object-contain"
          />

          <p className="mt-3 text-sm text-center line-clamp-2">
            {data.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserData;