import { motion } from "framer-motion";
type RevealTextProps = {
  lines: string[];
};
const RevealText: React.FC<RevealTextProps> = ({ lines }) => {
  return (
    <div className="relative w-auto h-auto ">
      {lines.map((map, index) => (
        <motion.h1
          key={index}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2, type: "tween" }}
          className="text-5xl text-center  font-semibold tracking-normal dark:text-white  lg:text-[60px] xl:text-[80px] 2xl:text-[130px] 3xl:text-[180px]  lg:text-left  "
        >
          {map}
        </motion.h1>
      ))}
    </div>
  );
};
export default RevealText;
