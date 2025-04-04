import { events } from "@/data/data";
import Meetings from "@/components/Meetings";

export default function UpcomingMeetings() {
  return (
    <Meetings
      type="upcoming"
      description="Join fellow coffee lovers at our curated events—from expert-led tastings to hands-on brewing workshops. Every cup tells a story, and we're here to share it together."
      data={events}
    />
  );
}
