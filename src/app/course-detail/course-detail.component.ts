import { Component, OnDestroy, OnInit } from '@angular/core';
import { Course } from 'src/app/Models/course';
import { CourseService } from 'src/app/Services/course.service';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of, pipe, switchMap } from 'rxjs';
import { Coursework } from 'src/app/Models/coursework.model';
import { Announcement } from 'src/app/Models/announcement';
import { Submission } from '../Models/submission.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  course$: Observable<Course> | undefined;
  displayedColumns: string[] = ['assignment', 'worksMaterial', 'submission', 'note'];
  courseWorks$: Observable<Coursework[]>; // Observable for course work
  courseWorksMaterial$: Observable<Coursework[]>; // Observable for course work
  coursAnnoncement$: Observable<Announcement[]>; 
  AssignmentSubmission$: Observable<Submission[]>; 

  currentAnnouncementIndex = 0;
  announcements: Announcement[] = [];
  
  courseId: string = '';
  error: string;
  products: any[];

  responsiveOptions: any[];
  submissionLink: string = ''; // For submission link

  constructor(private activeRoute: ActivatedRoute, private courseService: CourseService) {}

  paramMapObs;

  ngOnInit() {
    this.courseId = this.activeRoute.snapshot.params['id'];

    if (this.courseId != '') {
      this.courseWorks$ = this.courseService.getCourseworkById(this.courseId);
      this.courseWorksMaterial$ = this.courseService.getCourseworkMaterialById(this.courseId);
      this.coursAnnoncement$ = this.courseService.getCourseworkAnnoncesById(this.courseId);
      
      const courseWorkId = '652366480944'; // Example courseWork ID
      this.AssignmentSubmission$ = this.courseService.getSubmissions(this.courseId, courseWorkId);

      this.coursAnnoncement$.subscribe((announcements) => {
        if (announcements && announcements.length > 0) {
          this.announcements = announcements;
        }
      });

      this.courseWorks$.subscribe(courseWorks => {
        console.log('Course Works:', courseWorks);
      });

      this.courseWorksMaterial$.subscribe(courseWorks => {
        console.log('Course Works Material:', courseWorks);
      });

      this.coursAnnoncement$.subscribe(courseAnnonce => {
        console.log('Course announcements:', courseAnnonce);
      }); 

      this.AssignmentSubmission$.subscribe(courseAnnonce => {
        console.log('Assignment submission:', courseAnnonce);
      }); 
    }

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = data.get('id')!;
      console.log("Course ID:", this.courseId);
    });

    this.course$ = this.activeRoute.paramMap.pipe(
      switchMap(params => {
        this.courseId = params.get('id')!;
        return this.courseService.loadcourses().pipe(
          map(courses => courses.find(course => course.id === this.courseId)),
          catchError(err => {
            this.error = 'Failed to load course details. Please try again later.';
            return of(undefined); // Return undefined on error to keep the observable stream alive
          })
        );
      })
    );
  }

  ngOnDestroy() {
    if (this.paramMapObs) {
      this.paramMapObs.unsubscribe();
    }
  }

  // Method to handle submission
  onSubmit(coursework: Coursework): void {
    const submissionData = {
      link: {
        url: this.submissionLink
      }
    };

    this.courseService.submitStudentWork(this.courseId, coursework.id, 'YOUR_STUDENT_ID', submissionData)
      .subscribe(response => {
        console.log('Submission successful:', response);
      }, error => {
        console.error('Submission failed:', error);
      });
  }
}
