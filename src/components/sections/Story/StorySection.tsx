import { motion } from "framer-motion";
import { story } from "../../../data/story";

export default function StorySection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-5xl px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .8 }}
          className="mb-20 text-center text-5xl"
          style={{ fontFamily: "Cormorant Garamond" }}
        >
          Nuestra Historia
        </motion.h2>

        <div className="space-y-16">

          {story.map((event) => (

            <motion.div

              key={event.id}

              initial={{ opacity: 0, x: -80 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .7 }}

              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"

            >

              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-blue-600">
                {event.year}
              </p>

              <h3
                className="mb-4 text-3xl"
                style={{ fontFamily: "Cormorant Garamond" }}
              >
                {event.title}
              </h3>

              <p className="leading-8 text-gray-600">
                {event.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}