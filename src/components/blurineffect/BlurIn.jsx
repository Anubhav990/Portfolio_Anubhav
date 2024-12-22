import clsx from "clsx";
import { motion } from "framer-motion";

export function BlurIn() {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
      variants={variants1}
      className={clsx(
        "text-center font-display font-bold drop-shadow-sm",
        "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
        "tracking-[-0.02em]",
        "md:leading-[4rem] lg:leading-[4.5rem] xl:leading-[5rem]"
      )}
    >
      Hey there! I'm Anubhav
    </motion.h1>
  );
}