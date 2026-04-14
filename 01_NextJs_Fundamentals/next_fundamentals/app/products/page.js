import React from "react";
import Image from "next/image";
import Link from "next/link";
const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 }, // ISR
  });

  // error handling
  if (!res.ok) throw new Error("Failed to fetch data...");

  return res.json();
};

const Products = async () => {
  let productData = await getProducts();
  return  <div className="w-full grid gap-y-6 gap-x-1 grid-cols-1 md:grid-cols-4 justify-items-center container mx-auto">
        {productData.map((data) => (
          <Link key={data.id} href={`/products/${data.id}`}>
          <div
            className="bg-gray-900 rounded-md px-3   py-4 shadow-md w-64 text-white flex flex-col items-center"
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
            <button className="bg-blue-500 text-white rounded-md px-2 py-1 outline-none">Explore</button>
          </div>
          </Link>
        ))}
      </div>;
};

export default Products;
