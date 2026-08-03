import { motion } from "framer-motion";

const photos = [
  "/images/gallery/photo1.jpg",
  "/images/gallery/photo2.jpg"
];

export default function GallerySection() {
  return (
    <section className="bg-white py-32">
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
              className="overflow-hidden rounded-3xl"
            >
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="h-full w-full object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}