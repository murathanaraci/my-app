import styles from "./AboutSection.module.css";

// "use client"; // Uncomment if you plan to use client-side hooks

export default function AboutSection() {
  return (
    <section className={styles.about}>
      <main className="px-6 py-12 bg-neutral-900 text-white min-h-[80vh] flex flex-col items-center">
        <div className="max-w-6xl w-full space-y-12 bg-neutral-800/60 backdrop-blur-sm rounded-2xl shadow-xl">
          <div className="!p-10">
            <h1 className="text-4xl font-bold text-center  mb-6">Hakkımızda</h1>
            <br />
            <section className="space-y-4 text-lg leading-8 text-gray-200">
              <h2 className="text-2xl font-semibold text-white">Biz Kimiz?</h2>
              <br />
              <p>
                Tuğsan Yangın Söndürme Sistemleri olarak sektörde yılların
                tecrübesiyle profesyonel hizmet sunuyoruz. Güvenilir, kaliteli
                ve sertifikalı ürünlerimizle müşteri memnuniyetini en üst
                seviyede tutmayı amaçlıyoruz.
              </p>
              <br />
              <p>
                Yangın, saniyeler içinde hem hayatları hem de işyerlerini tehdit
                edebilir. Ancak doğru önlemle tüm riskler minimuma
                indirilebilir. Biz Tuğsan Yangın olarak sizi, ailenizi ve iş
                yerinizi korumak için gerekli tüm yangın güvenlik ekipmanlarını
                tek çatı altında sunuyoruz.
              </p>
              <br />
            </section>

            <section className="space-y-4 text-lg leading-8 text-gray-200">
              <h2 className="text-2xl font-semibold text-white">Misyonumuz</h2>
              <p>
                Güvenliği ertelemeyen, bilinçli ve sürdürülebilir çözümler
                sunarak yangın risklerini en aza indirmek ve doğru ürünü doğru
                yere konumlandırmak.
              </p>
              <br />
            </section>

            <section className="space-y-4 text-lg leading-8 text-gray-200">
              <h2 className="text-2xl font-semibold text-white">
                Biz Ne Yapıyoruz?
              </h2>
              <br />
              <ul className="list-disc list-inside space-y-2">
                <li>Binanıza özel güvenlik analizi</li>
                <li>İhtiyaca uygun ürün seçimi</li>
                <li>Profesyonel montaj ve devreye alma</li>
                <li>Periyodik bakım ve sertifikalı hizmet</li>
              </ul>
              <br />
              <p className="font-medium text-white">
                Güvenliği ertelemeyin. Bir yangın değil, bir önlem her şeyi
                değiştirir.
              </p>
              <br />
              <br />
              <br />
            </section>
          </div>
        </div>
      </main>
    </section>
  );
}
