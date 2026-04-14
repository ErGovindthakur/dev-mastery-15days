import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleProduct = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();
  // console.log(data)

  return (
    <div>
      <Image
        src={data.image}
        alt={data.title}
        height={100}
        width={100}
        className="object-contain"
      />

      <h3>Name : {data.title}</h3>
      <h4>Description: {data.description}</h4>

      <Link href="/products">
        <button className="bg-red-400 text-white px-2 py-1">
          Back
        </button>
      </Link>
    </div>
  );
};

export default SingleProduct;