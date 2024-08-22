import { Injectable } from "@angular/core";
import { CCourse, Course } from "../Models/course";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Coursework } from "../Models/coursework.model";
import { Announcement } from "../Models/announcement";
import { Submission } from "../Models/submission.model";
 

@Injectable()
export class CourseService{

    listcourses$: Observable<Course[]> | null;

    private apiUrlCourses = 'http://localhost:3000/list-courses';
    private apiUrlCourseWork = 'http://localhost:3000/list-course-work';
    private apiUrlCourseWorkMaterial = 'http://localhost:3000/list-course-work-materials';
    private apiUrlCourseAnnonce = 'http://localhost:3000/list-announcements';
    private apiUrlSubmission = 'http://localhost:3000/list-student-submissions'; 

    private apiUrlWorkSubmission = 'http://localhost:3000//submit-work/'
    constructor(private http: HttpClient) {}
  
    loadcourses(): Observable<Course[]> {
      // Fetching the list of courses from the API
      this.listcourses$ = this.http.get<Course[]>(this.apiUrlCourses);
      return this.listcourses$;
    }
  
    getCoursework(): Observable<Coursework[]> {
      return this.http.get<Coursework[]>(this.apiUrlCourseWork);
    }
  
    getCourseworkById(id: string): Observable<Coursework[]> {
      return this.http.get<Coursework[]>(`${this.apiUrlCourseWork}/${id}`);
    }
  
    getCourseworkMaterialById(id: string): Observable<Coursework[]> {
      return this.http.get<Coursework[]>(`${this.apiUrlCourseWorkMaterial}/${id}`);
    }
  
    getCourseworkAnnoncesById(id: string): Observable<Announcement[]> {
      return this.http.get<Announcement[]>(`${this.apiUrlCourseAnnonce}/${id}`);
    }


    getSubmissions(courseId: string, courseWorkId: string): Observable<Submission[]> {
      return this.http.get<Submission[]>(`${this.apiUrlSubmission}/${courseId}/${courseWorkId}`);
    }

    submitStudentWork(courseId: string, courseWorkId: string, studentId: string, submissionData: any): Observable<any> {
      return this.http.post<any>(`${this.apiUrlWorkSubmission}/submit-work/${courseId}/${courseWorkId}/${studentId}`, submissionData);
    }













    private description: string = `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                    mollit anim id est laborum."`;

    courses: CCourse[] = [
        { id: 1, title: 'Complete Modern JavaScript Course', price: 499, desc: this.description, image: './../assets/courses/course1.jpg', rating: 4.5, duration: 18.2, author: 'Steve smith'},
        { id: 2, title: 'A complete Angular Course', price: 599, desc: this.description, image: './../assets/courses/course2.jpg', rating: 4.9, duration: 20.8, author: 'Sarah King'},
        { id: 3, title: 'A Complete Node JS Bootcamp', price: 449, desc: this.description, image: './../assets/courses/course3.jpg', rating: 3.7, duration: 16.6, author: 'Mark Vought'},
        { id: 4, title: 'A Complete React Developer Course', price: 599, desc: this.description, image: './../assets/courses/course4.jpg', rating: 4.8, duration: 28.2, author: 'Sarah King'},
        { id: 5, title: 'ASP.NET Core with Web API', price: 649, desc: this.description, image: './../assets/courses/course5.jpg', rating: 3.5, duration: 34.4, author: 'Steve smith'},
        { id: 6, title: 'Froentend Development with Vue.js', price: 329, desc: this.description, image: './../assets/courses/course6.jpg', rating: 4.5, duration: 17.7, author: 'Steve smith'},
        { id: 7, title: 'A Complete Python Bootcamp', price: 469, desc: this.description, image: './../assets/courses/course7.jpg', rating: 3.4, duration: 32.6, author: 'Mark Vought'},
        { id: 8, title: 'Machine Learning with Python', price: 1299, desc: this.description, image: './../assets/courses/course8.jpg', rating: 4.8, duration: 26.7, author: 'Sarah King'},
    ]

    getAllcourses(){
        return new Observable<CCourse[]>((sub) => {
            setTimeout(() => {
                sub.next(this.courses);
            }, 100)
        })
    }
}