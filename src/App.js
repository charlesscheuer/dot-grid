import "./App.css";
import { motion } from "framer-motion";

const x = 60;
const y = 20;
function App() {
  return (
    <div className="App h-full w-full bg-bg">
      {" "}
      {[...Array(y)].map((e, i) => (
        <div className="flex justify-around py-2">
          {[...Array(x)].map((e, i) => (
            <motion.div
              animate={{
                left: [20, 0, -20],
                opacity: [0.3, 1, 0.1],
              }}
              transition={{
                type: "spring",
                repeat: Infinity,
                duration: 4,
                delay: i * 0.1,
              }}
              className="bg-dot relative"
              style={{ height: 2, width: 2 }}
              key={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
