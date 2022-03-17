import { motion, AnimatePresence } from "framer-motion";

export default function Layout(props) {
  return (
    <AnimatePresence>
      <motion.div
        id="page-content"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 20 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 2.5 }}
        className="container overflow-hidden"
        style={{ paddingTop: "200px" }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
}