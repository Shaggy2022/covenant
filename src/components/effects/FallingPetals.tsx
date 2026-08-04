import { motion } from "framer-motion";

const petals = Array.from({ length: 15 }, (_, i) => i);

export default function FallingPetals() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal}
          className="absolute text-pink-300 opacity-70"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
            rotate: 0,
          }}
          animate={{
            x:
              Math.random() * window.innerWidth,
            y: window.innerHeight + 200,
            rotate: 360,
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        >
          🌸
        </motion.div>
      ))}
    </div>
  );
}