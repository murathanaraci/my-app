"use client";
import Image from "next/image";

export default function ProductCard2({ product2 }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6 mb-8">
      <div className="w-full md:w-1/3">
        <Image
          src={product2.image}
          alt={product2.title}
          width={400}
          height={150}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{product2.title}</h2>
        <p className="text-gray-700">{product2.description}</p>
      </div>
    </div>
  );
}
