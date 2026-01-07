"use client";
import Image from "next/image";

export default function PartnerCard({ PartnerCard }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-6 mb-8">
      <div className="w-full md:w-1/3">
        <Image
          src={PartnerCard.image}
          alt={PartnerCard.title}
          width={400}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>
      <div className="w-full md:w-2/3">
        <h2 className="text-2xl font-bold mb-2">{PartnerCard.title}</h2>
        <p className="text-gray-700">{PartnerCard.description}</p>
      </div>
    </div>
  );
}
