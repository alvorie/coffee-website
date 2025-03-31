import { motion, transform } from "framer-motion";
import Style from "./Hero.module.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    setIsInitialized(true);
  }, []);

  return (
    <div>
      <div className={Style.heroContainer}>
        <motion.div
          className={Style.bgContainer}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />

        <motion.div
          className={Style.textContainer}
          initial={{ opacity: 0, transform: "scale(0.7)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.5 }}
        >
          <i>
            <h2>drink-drink-drink it up!</h2>
          </i>

          <a className={Style.Link}>
            <NavLink to={"/upcoming-meetings"}>
              <h1>
                → explore upcoming <br />
                coffee-meetups
              </h1>
            </NavLink>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
