"use client";

import { motion } from "framer-motion";

export const ShakeAnimation = (
  props: React.ComponentPropsWithoutRef<typeof motion.div>
) => {
  return (
    <motion.div
      animate={{
        x: [0, 5, -5, 5, -5, 0],
      }}
      transition={{
        duration: 1,
        delay: 2,
        bounce: 0.5,
      }}
      {...props}
    >
      {props.children}
    </motion.div>
  );
};
