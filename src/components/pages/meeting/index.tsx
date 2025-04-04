import { events } from "@/data/data";
import { Meeting } from "@/types";
import { useParams } from "react-router";
import Style from "./meetingPage.module.css";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaClock,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MeetingPage() {
  const { meetingId } = useParams();

  const event: Meeting | undefined = events.find(
    (event) => event.id.toString() === meetingId
  );

  return (
    <div className="container">
      {event ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={Style.Page}
        >
          <div className={Style.MainInfoContainer}>
            <div className={Style.Info}>
              <h1 className={Style.Title}>{event.name}</h1>

              <div className={Style.Meta}>
                <div className={Style.MetaItem}>
                  <FaCalendarAlt className={Style.Icon} />
                  <span>
                    {event.date.toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className={Style.MetaItem}>
                  <FaMapMarkerAlt className={Style.Icon} />
                  <span>{event.place}</span>
                </div>

                <div className={Style.MetaItem}>
                  <FaUsers className={Style.Icon} />
                  <span>{event.capacity} participants</span>
                </div>

                <div className={Style.MetaItem}>
                  <FaClock className={Style.Icon} />
                  <span>{event.duration}</span>
                </div>

                <div className={Style.MetaItem}>
                  <FaUser className={Style.Icon} />
                  <span>Organized by {event.organizer}</span>
                </div>
                <div className={Style.MetaItem}>
                  <span className={Style.Cost}>
                    {event.cost ? `${event.cost}$` : "free"}
                  </span>
                </div>
              </div>

              <p className={Style.Description}>{event.description}</p>
            </div>

            <div className={Style.ImageContainer}>
              <img className={Style.Img} src={event.img} alt={event.name} />
            </div>
          </div>
          <div>
            <h2 className={Style.Subtitle}>about this event</h2>
            <p>{event.fullDescription}</p>
            <h2 className={Style.Subtitle}>requirements</h2>
            <p>{event.requirements}</p>
          </div>
          <div className={Style.ButtonContainer}>
            <Button size="lg">register</Button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={Style.NotFound}
        >
          <h2>Meeting not found</h2>
          <p>We couldn't find the meeting you're looking for.</p>
        </motion.div>
      )}
    </div>
  );
}
