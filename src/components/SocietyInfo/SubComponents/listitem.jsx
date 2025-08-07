import { motion } from "framer-motion";

export default function ListItem({ item, setBgImage }) {
  return (
    <motion.div
      className="text-3xl font-bold cursor-pointer p-4 transition duration-300 hover:text-blue-500"
      onMouseEnter={() => setBgImage(item.image)}
    >
      {item.title}
    </motion.div>
  );
}
