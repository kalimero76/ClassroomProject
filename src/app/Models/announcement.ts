import { Material } from "./material";

export interface Announcement {
    id: string;
    text: string;
    materials?: Material[];
  }