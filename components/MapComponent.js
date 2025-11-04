"use client";

export default function MapComponent() {
  return (
    <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.7413250974682!2d29.17896518383323!3d41.030914897468605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacfb9e7843901%3A0x661bfb1abf6507d8!2zVFXEnlNBTiBZQU5HSU4gU8OWTkTDnFJNRSBTxLBTVEVNTEVSxLA!5e0!3m2!1str!2str!4v1762264617231!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
