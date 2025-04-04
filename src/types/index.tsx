export interface Meeting {
  id: number;
  name: string;
  date: Date;
  cost: number;
  description: string;
  fullDescription: string;
  place: string;
  duration: string;
  capacity: number;
  organizer: string;
  requirements: string;
  img: string;
  highlights: string[];
}
