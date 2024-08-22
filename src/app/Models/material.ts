import { DriveFile } from "./driveFile";

export interface YouTubeVideo {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface Link {
  id: string;
  url: string;
  title: string;
}

export interface Form {
  id: string;
  title: string;
  formUrl: string;
}



export interface Material {
  driveFile?: {
    driveFile: DriveFile;
    shareMode: string;
  };
  youtubeVideo?: YouTubeVideo;
  link?: Link;
  form?: Form;
}