import { motion } from "framer-motion";
type Text = {
  text: string;
  underlined: boolean;
};
type Props = {
  text: Text[];
};
const Subheading: React.FC<Props> = ({ text }) => {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full p-5 h-auto flex justify-center items-center flex-col py-5 pt-10 lg:p-0 lg:py-10 gap-10"
    >
      <div className="w-full h-full flex flex-col gap-5 lg:flex-row lg:justify-start lg:items-start">
        <div className="w-full h-full flex flex-col justify-center  items-center gap-5 lg:flex-row lg:w-full lg:justify-start lg:items-start">
          <h1 className="text-2xl  font-semibold lg:text-3xl w-full   text-black">
            {text.map((map, index) =>
              map.underlined ? (
                <span
                  key={index}
                  className="ml-2 mr-2 underline underline-offset-3 decoration-8 decoration-secondary"
                >
                  {map.text}
                </span>
              ) : (
                map.text
              )
            )}
          </h1>
        </div>
      </div>
    </motion.div>
  );
};
export default Subheading;
