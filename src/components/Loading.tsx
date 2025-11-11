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
      <div className="flex flex-col items-center mb-32">
        <motion.img
          src={royceLogo}
          alt="ROYCE Logistics"
          className="w-48 h-48 object-contain"
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

      {/* Animated Truck Container - Centered */}
      <div className="relative w-full h-32">
        {/* Road/Ground Line - Centered */}
        <div 
          className="absolute left-0 right-0 h-1 bg-charcoal/20" 
          style={{ top: "50%" }}
        />

        {/* Moving Truck - Centered vertically */}
        <motion.div
          className="absolute left-0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          animate={{
            x: ["-150px", "calc(100vw + 150px)"],
            y: [0, -8, 0, -6, 0, -8, 0],
          }}
          transition={{
            x: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <svg
            width="140"
            height="80"
            viewBox="0 0 140 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Truck Body Shadow */}
            <motion.ellipse
              cx="70"
              cy="72"
              rx="45"
              ry="6"
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
              x="20"
              y="20"
              width="65"
              height="40"
              rx="2"
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
            
            {/* Container Lines/Details */}
            <line x1="52" y1="20" x2="52" y2="60" stroke="#F9B12B" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="40" x2="85" y2="40" stroke="#F9B12B" strokeWidth="1.5" opacity="0.3" />
            
            {/* Container Door Detail */}
            <rect x="72" y="30" width="10" height="25" rx="1" fill="#F9B12B" opacity="0.2" />

            {/* Truck Cabin */}
            <motion.path
              d="M 85 28 L 85 60 L 115 60 L 115 47 L 102 28 Z"
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
              d="M 88 32 L 88 48 L 99 48 L 99 38 L 93 32 Z"
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
            
            {/* Side Window */}
            <rect x="101" y="34" width="10" height="14" rx="1" fill="#F9B12B" opacity="0.5" />

            {/* Front Grill */}
            <rect x="113" y="44" width="2" height="11" rx="0.5" fill="#F9B12B" opacity="0.7" />
            <line x1="112" y1="48" x2="115" y2="48" stroke="#F9B12B" strokeWidth="1" opacity="0.5" />
            <line x1="112" y1="51" x2="115" y2="51" stroke="#F9B12B" strokeWidth="1" opacity="0.5" />

            {/* Headlight */}
            <motion.circle
              cx="114"
              cy="42"
              r="1.5"
              fill="#F9B12B"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Wheels Base (Axles) */}
            <rect x="25" y="58" width="6" height="2" rx="1" fill="#3C020B" />
            <rect x="95" y="58" width="6" height="2" rx="1" fill="#3C020B" />

            {/* Back Wheel */}
            <g>
              <circle cx="35" cy="60" r="10" fill="#1a1a1a" />
              <circle cx="35" cy="60" r="8" fill="#2a2a2a" />
              <motion.circle
                cx="35"
                cy="60"
                r="6"
                fill="#F9B12B"
                opacity="0.6"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "35px 60px" }}
              />
              {/* Wheel Spokes */}
              <g>
                <motion.line
                  x1="35"
                  y1="54"
                  x2="35"
                  y2="66"
                  stroke="#3C020B"
                  strokeWidth="1.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "35px 60px" }}
                />
                <motion.line
                  x1="29"
                  y1="60"
                  x2="41"
                  y2="60"
                  stroke="#3C020B"
                  strokeWidth="1.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "35px 60px" }}
                />
              </g>
              <circle cx="35" cy="60" r="2" fill="#3C020B" />
            </g>

            {/* Front Wheel */}
            <g>
              <circle cx="100" cy="60" r="10" fill="#1a1a1a" />
              <circle cx="100" cy="60" r="8" fill="#2a2a2a" />
              <motion.circle
                cx="100"
                cy="60"
                r="6"
                fill="#F9B12B"
                opacity="0.6"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 60px" }}
              />
              {/* Wheel Spokes */}
              <g>
                <motion.line
                  x1="100"
                  y1="54"
                  x2="100"
                  y2="66"
                  stroke="#3C020B"
                  strokeWidth="1.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "100px 60px" }}
                />
                <motion.line
                  x1="94"
                  y1="60"
                  x2="106"
                  y2="60"
                  stroke="#3C020B"
                  strokeWidth="1.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ transformOrigin: "100px 60px" }}
                />
              </g>
              <circle cx="100" cy="60" r="2" fill="#3C020B" />
            </g>

            {/* Exhaust Smoke */}
            <g>
              <motion.circle
                cx="18"
                cy="25"
                r="3"
                fill="#3C020B"
                opacity="0.2"
                animate={{
                  y: [-5, -25],
                  x: [-3, 3],
                  scale: [0.5, 1.8],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.circle
                cx="15"
                cy="28"
                r="2.5"
                fill="#3C020B"
                opacity="0.2"
                animate={{
                  y: [-5, -25],
                  x: [3, -3],
                  scale: [0.5, 1.5],
                  opacity: [0.3, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: 0.5,
                }}
              />
            </g>
          </svg>

          {/* Dust particles behind truck */}
          <div className="absolute top-10 -left-10">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-charcoal/30"
                style={{
                  left: `${i * 6}px`,
                  top: `${Math.random() * 5}px`,
                }}
                animate={{
                  x: [-30, -60],
                  y: [0, -15, -8],
                  opacity: [0.5, 0],
                  scale: [1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>

          {/* Speed lines */}
          <motion.g>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-0.5 bg-charcoal/20"
                style={{
                  width: `${15 + i * 5}px`,
                  left: `-${20 + i * 10}px`,
                  top: `${25 + i * 8}px`,
                }}
                animate={{
                  x: [-20, -60],
                  opacity: [0.5, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.g>
        </motion.div>
      </div>

      {/* Loading Dots Below Truck */}
      <motion.div
        className="mt-20 flex gap-2"
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