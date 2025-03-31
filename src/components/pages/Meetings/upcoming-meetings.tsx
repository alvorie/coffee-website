import { events } from "@/components/data/data";
import CoffeeEvent from "@/components/event";
import Style from "./meetings.module.css";

export default function Meetings() {
  return (
    <div className={Style.Content + " container"}>
      <div className={Style.Text}>
        <h1>upcoming meetings</h1>
        <p>
          Join fellow coffee lovers at our curated events—from expert-led
          tastings to hands-on brewing workshops. Every cup tells a story, and
          we're here to share it together.
        </p>
      </div>
      <div className={Style.Events}>
        {events.map((event) => (
          <CoffeeEvent key={event.name} data={event} />
        ))}
      </div>
    </div>
  );
}
