import { animate, motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  animation: boolean;
  inViewportView: boolean;
  id: string;
};

const DottedButton = ({ children, animation, inViewportView, id }: Props) => {
  return (
    <motion.button
      initial={animation ? { y: 50, opacity: 0 } : {}}
      animate={animation ? { y: 0, opacity: 1 } : {}}
      whileInView={inViewportView ? "visible" : ""}
      transition={{ duration: 0.5, delay: 0.8, type: "tween" }}
      className="w-fit rounded-2xl   bg-accent  text-white px-6 py-3  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_#1565C0] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
    >
      <a href={id}>{children}</a>
    </motion.button>
  );
};

export default DottedButton;
