import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  number: number;
};
const Countup: React.FC<Props> = ({ number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    const animation = animate(count, number, { duration: 2 });
    isInView ? animation.play() : animation.cancel();
  }, [isInView]);

  return (
    <motion.span ref={ref} className="w-fit h-fit">
      {rounded}
    </motion.span>
  );
};
export default Countup;
