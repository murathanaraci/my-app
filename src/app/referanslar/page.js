import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ReferenceCard from "../../../components/ReferenceCard";
import { references } from "../../data/references";

export default function Referanslar() {
  return (
    <>
      <Navbar />

      <main className="bg-neutral-900 min-h-[80vh] px-6 py-16">
        <div className="max-w-8xl mx-auto">
          <h1 className="text-4xl font-bold text-white text-center mb-15">
            Referanslarımız
          </h1>
          <br />
          <br />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {references.map((ref, i) => (
              <ReferenceCard key={i} {...ref} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
