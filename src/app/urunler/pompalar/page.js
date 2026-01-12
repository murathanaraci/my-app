import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import { products } from "../../../data/products";
import ProductCard from "../../../../components/ProductCard";

export default function YanginTupuPage() {
  const kategori = "yangin-sondurme-tupleri"; // 🔥 sabit kategori
  const filteredProducts = products.filter((p) => p.category === kategori);

  return (
    <>
      <Navbar />

      <main
        style={{
          padding: "2rem",
          backgroundColor: "#1a1a1a",
          color: "#fff",
          minHeight: "80vh",
        }}
      >
        <h1 className="text-3xl font-bold mb-10 text-center">
          Yangın Söndürme Tüpleri
        </h1>

        {filteredProducts.length === 0 ? (
          <div className="max-w-5xl mx-auto p-6 text-center">
            <h2 className="text-2xl font-semibold mb-2">Ürün bulunamadı</h2>
            <p className="text-gray-400">Bu kategoriye ait ürün eklenmemiş.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
