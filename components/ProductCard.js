"use client";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6 mb-8">
      <div className="w-full md:w-1/3">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}
