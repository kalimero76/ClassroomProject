// submission.model.ts

import { DriveFile } from "./driveFile";

  
  export interface AssignmentSubmission {
    attachments: Array<{
      driveFile: DriveFile;
    }>;
  }
  
  export interface StateHistory {
    state: string;
    stateTimestamp: string;
    actorUserId: string;
  }
  
   
  
  export interface Submission {
    courseId: string;
    courseWorkId: string;
    id: string;
    userId: string;
    creationTime: string;
    updateTime: string;
    state: string;
    alternateLink: string;
    courseWorkType: string;
    assignmentSubmission: AssignmentSubmission;
 
  }
  
 
  