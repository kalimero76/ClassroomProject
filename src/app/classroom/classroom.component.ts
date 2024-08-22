import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../Services/course.service';
import { Course } from '../Models/course';
import { catchError, finalize, Observable, of } from 'rxjs';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  listcourses$: Observable<Course[]>;
  searchString: string;
  loading: boolean = false;
  error: string = '';

  constructor(
    private courseService: CourseService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadCourses();
    this.handleQueryParams();
  }

  private loadCourses(): void {
    this.loading = true;
    this.listcourses$ = this.courseService.listcourses$.pipe(
      catchError(err => {
        this.error = 'Failed to load courses. Please try again later.';
        return of([]); // Return an empty array on error to keep the observable stream alive
      }),
      finalize(() => this.loading = false) // Stop the loading indicator after fetching is done
    );
  }

  private handleQueryParams(): void {
    this.activeRoute.queryParamMap.subscribe(params => {
      this.searchString = params.get('search') || '';
      if (this.searchString) {
        // Handle filtering or other logic based on searchString
      }
    });
  }
}
