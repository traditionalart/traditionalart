import { motion, useScroll, useTransform } from "framer-motion";
import "./scrollHint.css";
import ArrowDown from "../assets/graphics/misc/arrowDown.svg";

export default function ScrollHint() {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 150], [1, 0]);
  const yFade = useTransform(scrollY, [0, 150], [0, -20]);

  return (
    <motion.img
      src={ArrowDown}
      alt=""
      className="scroll-hint"
      style={{ opacity, y: yFade }}
      animate={{ y: [0, 20, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
