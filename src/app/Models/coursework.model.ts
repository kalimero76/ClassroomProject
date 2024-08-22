 

// export interface Assignment {
//   studentWorkFolder: DriveFile;
// }

import { Material } from "./material";


export interface Coursework {
  forEach(arg0: (coursework: any) => void): unknown;
  courseId: string; // Read-only
  id: string;
  title?: string;
  description?: string; // Optional
  state?: 'COURSE_WORK_STATE_UNSPECIFIED' | 'PUBLISHED' | 'DRAFT' | 'DELETED';
  alternateLink?: string;
  creationTime: string;
  updateTime: string;
  assigneeMode: 'ASSIGNEE_MODE_UNSPECIFIED' | 'ALL_STUDENTS' | 'INDIVIDUAL_STUDENTS';
  creatorUserId: string;
  topicId?: string; // Optional
  materials?: Material[]; // Optional
  dueDate?: Date;
  scheduledTime?: string; // Optional
  maxPoints?: number; // Optional
 
  workType: 'COURSE_WORK_TYPE_UNSPECIFIED' | 'ASSIGNMENT' | 'SHORT_ANSWER_QUESTION' | 'MULTIPLE_CHOICE_QUESTION';
  associatedWithDeveloper?: boolean; // Optional
  individualStudentsOptions?: any; // Optional (define interface if needed)
  submissionModificationMode?: string; // Optional
 
  multipleChoiceQuestion?: any; // Optional (define interface if needed)
  gradeCategory?: any; // Optional (define interface if needed)


  position: number;
}


// src/app/models/coursework.model.ts

// export interface DriveFile {
//   id: string;
//   title: string;
//   alternateLink: string;
//   thumbnailUrl: string;
// }

// export interface Material {
//   driveFile: {
//     driveFile: DriveFile;
//     shareMode: string;
//   };
// }

// export interface Coursework {
//   courseId: number;
//   id: number;
//   title: string;
//   description: string;
//   state: string;
//   creationTime: Date;
//   updateTime: Date;
//   dueDate: Date;
//   dueTime: string;
//   maxPoints: number;
//   workType: string;
//   submissionMode: string;
//   assigneeMode: string;
//   creatorUserId: string;
//   materials: Material[];
// }


// src/app/models/coursework.model.ts





// export interface Coursework {
//   courseId: number;
//   id: number;
//   title: string;
//   description: string;
//   state: string;
//   creationTime: Date;
//   updateTime: Date;
//   dueDate: Date;
//   dueTime: string;
//   maxPoints: number;
//   workType: string;
//   submissionMode: string;
//   assigneeMode: string;
//   creatorUserId: string;
//   materials: Material[];
 
// }
