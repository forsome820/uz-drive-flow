import { motion } from "framer-motion";
import royceLogo from "@/assets/royce-logo-new.png";

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#F9B12B" }}
    >
      {/* Logo at Top */}
      <div className="flex flex-col items-center mb-20">
        <motion.img
          src={royceLogo}
          alt="ROYCE Logistics"
          className="w-60 h-60 object-contain"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [1, 0.9, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Truck Container */}
      <div className="relative w-64 h-32">
        {/* Road/Ground Line */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 h-1 bg-charcoal/20"
          animate={{
            scaleX: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated Truck SVG */}
        <motion.div
          className="absolute left-1/2 bottom-8"
          style={{ x: "-50%" }}
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Truck Body Shadow */}
            <motion.ellipse
              cx="60"
              cy="75"
              rx="35"
              ry="5"
              fill="rgba(60, 2, 11, 0.2)"
              animate={{
                scaleX: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Container Box */}
            <motion.rect
              x="15"
              y="25"
              width="55"
              height="35"
              rx="3"
              fill="#3C020B"
              animate={{
                fill: ["#3C020B", "#5C021B", "#3C020B"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Container Lines */}
            <line x1="45" y1="25" x2="45" y2="60" stroke="#F9B12B" strokeWidth="1.5" opacity="0.3" />
            <line x1="15" y1="42" x2="70" y2="42" stroke="#F9B12B" strokeWidth="1.5" opacity="0.3" />

            {/* Truck Cabin */}
            <motion.path
              d="M 70 35 L 70 55 L 95 55 L 95 45 L 85 35 Z"
              fill="#3C020B"
              animate={{
                fill: ["#3C020B", "#5C021B", "#3C020B"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            />
            
            {/* Cabin Window */}
            <motion.path
              d="M 73 38 L 73 50 L 82 50 L 82 43 L 78 38 Z"
              fill="#F9B12B"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Front Grill */}
            <rect x="93" y="47" width="2" height="8" fill="#F9B12B" opacity="0.7" />

            {/* Wheels */}
            <g>
              {/* Back Wheel */}
              <motion.circle
                cx="30"
                cy="60"
                r="8"
                fill="#3C020B"
                // animate={{
                //   rotate: 360,
                // }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ originX: "30px", originY: "60px" }}
              />
              <circle cx="30" cy="60" r="5" fill="#F9B12B" opacity="0.8" />
              <motion.circle
                cx="30"
                cy="60"
                r="2"
                fill="#3C020B"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Front Wheel */}
              <motion.circle
                cx="82"
                cy="60"
                r="8"
                fill="#3C020B"
                // animate={{
                //   rotate: 360,
                // }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ originX: "82px", originY: "60px" }}
              />
              <circle cx="82" cy="60" r="5" fill="#F9B12B" opacity="0.8" />
              <motion.circle
                cx="82"
                cy="60"
                r="2"
                fill="#3C020B"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </g>

            {/* Exhaust Smoke */}
            <g>
              <motion.circle
                cx="12"
                cy="30"
                r="3"
                fill="#3C020B"
                opacity="0.2"
                animate={{
                  y: [-5, -25],
                  x: [-2, 2],
                  scale: [0.5, 1.5],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                cx="10"
                cy="32"
                r="2.5"
                fill="#3C020B"
                opacity="0.2"
                animate={{
                  y: [-5, -25],
                  x: [2, -2],
                  scale: [0.5, 1.3],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.4,
                }}
              />
            </g>

            {/* Movement Lines */}
            <motion.g
              animate={{
                x: [0, -20],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <line x1="5" y1="35" x2="15" y2="35" stroke="#3C020B" strokeWidth="2" opacity="0.3" />
              <line x1="3" y1="45" x2="13" y2="45" stroke="#3C020B" strokeWidth="2" opacity="0.3" />
              <line x1="5" y1="55" x2="15" y2="55" stroke="#3C020B" strokeWidth="2" opacity="0.3" />
            </motion.g>
          </svg>
        </motion.div>

        {/* Dust particles behind truck */}
        <div className="absolute bottom-8 left-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-charcoal/20"
              style={{
                left: `${10 + i * 8}px`,
                bottom: "0px",
              }}
              animate={{
                x: [-20, -40],
                y: [0, -10, -5],
                opacity: [0.4, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeOut",
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading Dots Below Truck */}
      <motion.div
        className="mt-12 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="w-3 h-3 rounded-full bg-charcoal"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Loading;