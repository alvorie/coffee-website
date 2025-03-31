import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Style from "./event.module.css";
import { FaCalendarAlt, FaMapMarkerAlt, FaCoffee } from "react-icons/fa";

interface Props {
  data: {
    name: string;
    date: Date;
    cost: number;
    description: string;
    place: string;
    img: string;
  };
}

export default function CoffeeEvent({ data }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.1,
        ease: "easeOut",
      }}
      whileHover={{ y: -5 }}
      className={Style.Card}
    >
      <div className={Style.ImageContainer}>
        <img src={data.img} className={Style.CardImg} alt={data.name} />
      </div>

      <div className={Style.Content}>
        <div className={Style.Header}>
          <h3 className={Style.Title}>
            <FaCoffee className={Style.Icon} /> {data.name}
          </h3>
          <span className={Style.Cost}>
            {data.cost ? `${data.cost}$` : "free"}
          </span>
        </div>

        <div className={Style.Meta}>
          <div className={Style.MetaItem}>
            <FaCalendarAlt className={Style.Icon} />
            <span>
              {data.date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>

          <div className={Style.MetaItem}>
            <FaMapMarkerAlt className={Style.Icon} />
            <span>{data.place}</span>
          </div>
        </div>

        <p className={Style.Description}>{data.description}</p>

        <Button className={Style.Button}>See details</Button>
      </div>
    </motion.div>
  );
}
