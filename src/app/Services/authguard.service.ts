import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs'
 
import { ContactComponent } from '../contact/contact.component';
import { CCourse } from '../Models/course';
import { CourseService } from './course.service';
import { AuthService } from './auth.service';

export interface IDeactivateComponent{
    canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent>, Resolve<CCourse[]>{
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
    courseService: CourseService = inject(CourseService);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        boolean | Observable<boolean> | Promise<boolean>
    {
        if(this.authService.SignIn){
            return true;
        }else{
            this.router.navigate(['/Login']);
            return false;
        }
    }


    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute, state);
    }

    canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) 
    {
        return component.canExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): CCourse[] | Observable<CCourse[]> | Promise<CCourse[]> {
        return this.courseService.getAllcourses();
    }
}