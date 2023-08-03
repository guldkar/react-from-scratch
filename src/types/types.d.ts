import { ExtendedDate } from "Utils/Extensions";

export interface TimelineItem {
  id: string;
  title: string;
  start: ExtendedDate;
  end: ExtendedDate;
  technologies: string[];
  description: string;
}
