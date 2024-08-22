import {  Injectable } from "@angular/core";
 import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CourseService } from "./Services/course.service";

// export const CanActivate = () => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     if(authService.IsAuthenticated()){
//         return true;
//     }else{
//         router.navigate(['/Login']);
//         return false;
//     }
// }

// export const CanActivateChild = () => {
//     return CanActivate();
// }

// export const resolve = () =>{
//     const courseService = inject(CourseService);
//     return courseService.getAllcourses();
// }

import { inject } from "@angular/core";
 
import { Observable } from "rxjs";
import { AuthService } from "./Services/auth.service";
 
 
 
export const CanActivate = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isLoggedIn) {
        return true;
    } else {
        router.navigate(['/Login']);
        return false;
    }
}

export const CanActivateChild = () => {
    return CanActivate();
}

export const resolve = () => {
    const courseService = inject(CourseService);
    return courseService.loadcourses();
}



export const authGuard: CanActivateFn = (route, state) => {
  return true;
};


@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn !== true) {
      this.router.navigate(['sign-in']);
    }
    return true;
  }
}

 