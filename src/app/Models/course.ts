export class CCourse{
    id: number; 
    title: string; 
    price: number; 
    desc: string; 
    image: string; 
    rating: number; 
    duration: number; 
    author: string;
}


enum CourseState {
    ACTIVE = 'ACTIVE',
    ARCHIVED = 'ARCHIVED',
    PROVISIONED = 'PROVISIONED',
    DECLINED = 'DECLINED',
    SUSPENDED = 'SUSPENDED'
}

interface DriveFolder {
    id: string;
    title: string;
    alternateLink: string;
}

export interface Course {
    id: string;
    name: string;
    section: string;
    descriptionHeading: string;
    description: string;
    room: string;
    ownerId: string;
    creationTime: string;
    updateTime: string;
    enrollmentCode: string;
    courseState: CourseState;
    alternateLink: string;
    teacherGroupEmail: string;
    courseGroupEmail: string;
    teacherFolder: DriveFolder;
    guardiansEnabled: boolean;
    calendarId: string;
    moduleId?: string;
    imageUrl?:string 

    price?: number;  // Assuming price and rating are optional properties
    rating?: number; // Add these if they are part of the extended course model
}
