import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const photos = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="bg-[#FFCCFF] py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Nuestros Recuerdos
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer overflow-hidden rounded-3xl shadow-lg"
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="h-96 w-full object-cover transition duration-500 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        <p
          className="mt-16 text-center text-2xl text-slate-600"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Cada fotografía guarda un recuerdo,
          cada recuerdo nos acerca a este día.
        </p>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/90
              p-6
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Foto ampliada"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="
                max-h-[90vh]
                max-w-[90vw]
                rounded-3xl
                shadow-2xl
              "
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}