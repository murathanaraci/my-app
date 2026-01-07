import Image from "next/image";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ReferenceCard({ name, logo }) {
  return (
    <div
      className="group bg-neutral-800 rounded-xl p-6 flex flex-col items-center justify-center
                 transition-all duration-300 hover:bg-neutral-700 hover:-translate-y-2
                 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]"
    >
      <div className="w-32 h-20 mb-4 flex items-center justify-center">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            width={70}
            height={70}
            className="transition"
          />
        ) : (
          <div
            className="w-full h-full rounded-lg bg-neutral-700
                       flex items-center justify-center
                       text-2xl font-bold text-neutral-300
                       group-hover:bg-red-600 group-hover:text-white transition"
          >
            {getInitials(name)}
          </div>
        )}
      </div>

      <h3 className="text-white text-sm md:text-base font-semibold text-center leading-snug">
        {name}
      </h3>
    </div>
  );
}
