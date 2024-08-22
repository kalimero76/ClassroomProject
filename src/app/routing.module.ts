import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PopularComponent } from './home/popular/popular.component';
 
import { NotFoundComponent } from './not-found/not-found.component';
 
import { CheckoutComponent } from './checkout/checkout.component';
 
import { CanActivate, CanActivateChild, resolve } from './auth.guard'
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ClassroomComponent } from './classroom/classroom.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
 

//DEFINE ROUTE
const routes: Routes = [  

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent  },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'Classroom', component:ClassroomComponent , resolve: {courses: resolve}},


    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => {return comp.canExit();}]},
   
    {path: 'Classroom', canActivateChild: [CanActivateChild], children: [
      {path: 'Course/:id', component: CourseDetailComponent},
      {path: 'Popular', component: PopularComponent},
      {path: 'Checkout', component: CheckoutComponent}
    ]},
 
    {path: '**', component: NotFoundComponent},
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {enableTracing: true})
    ],
    exports: [RouterModule]
})
export class RoutingModule{

}