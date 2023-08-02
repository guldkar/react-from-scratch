import { ExtendedDate } from "Utils/Extensions";

export interface TimelineItem {
  title: string;
  start: ExtendedDate;
  end: ExtendedDate;
  technologies: string[];
  description: string;
}
