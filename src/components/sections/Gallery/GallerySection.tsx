import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const galleryItems = [
  {
    type: "image",
    src: "/images/gallery/photo1.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo2.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo3.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo4.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo5.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo6.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo7.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo8.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo9.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo10.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo11.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo12.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo13.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo14.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo15.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo16.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo17.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo18.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo19.jpg",
  },
  {
    type: "image",
    src: "/images/gallery/photo20.jpg",
  },
  {
    type: "video",
    src: "/video/video1.mp4",
  },
  {
    type: "video",
    src: "/video/video2.mp4",
  },
  {
    type: "video",
    src: "/video/video3.mp4",
  },
  {
    type: "video",
    src: "/video/video4.mp4",
  },
  {
    type: "video",
    src: "/video/video5.mp4",
  },
  {
    type: "video",
    src: "/video/video6.mp4",
  },
  {
    type: "video",
    src: "/video/video7.mp4",
  },
  {
    type: "video",
    src: "/video/video8.mp4",
  },
  {
    type: "video",
    src: "/video/video9.mp4",
  },
  {
    type: "video",
    src: "/video/video10.mp4",
  },
];

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<{
    type: string;
    src: string;
  } | null>(null);

  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="mb-16 text-center text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Nuestros Recuerdos
        </h2>

        <h2
          className="mb-10 text-center text-3xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Abre cada imagen y revive cada momento, al final hay unos videos que si pulsas sobre
          ellos podrás verlos en pantalla completa y con sonido.
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg cursor-pointer"
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Recuerdo ${index + 1}`}
                  className="h-80 w-full object-cover"
                />
              ) : (
                <video
                  src={item.src}
                  className="h-80 w-full object-cover"
                  muted
                  playsInline
                />
              )}
            </motion.div>
          ))}
        </div>

        <p
          className="mt-16 text-center text-2xl text-slate-600"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Cada fotografía guarda un recuerdo,
          <br />
          cada recuerdo nos acerca a este día.
        </p>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-6 top-6 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm hover:bg-white/20"
            >
              <X size={28} />
            </button>

            {selectedItem.type === "image" ? (
              <img
                src={selectedItem.src}
                alt="Imagen ampliada"
                className="max-h-[90vh] max-w-full rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedItem.src}
                controls
                autoPlay
                className="max-h-[90vh] max-w-full rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}