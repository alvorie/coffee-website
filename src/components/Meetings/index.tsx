import CoffeeEvent from "@/components/event";
import Style from "./meetings.module.css";
import { Meeting } from "@/types";

interface Props {
  type: string;
  description: string;
  data?: Meeting[];
}

export default function Meetings({ type, description, data }: Props) {
  return (
    <div className={`${Style.Content} container`}>
      <div className={Style.Text}>
        <h1>{type} meetings</h1>
        <p>{description}</p>
      </div>
      <div className={Style.Events}>
        {data ? (
          data.map((event) => <CoffeeEvent key={event.name} {...event} />)
        ) : (
          <div className="container">
            <h3 className={Style.NotFound}>
              No meetings found. Come back later!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}
