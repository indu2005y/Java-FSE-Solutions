import { Routes } from '@angular/router';

import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';


export const routes: Routes = [

  {
    path: 'courses',
    component: CourseList
  },

  {
    path: 'profile',
    component: StudentProfile
  },

  {
    path: 'enroll',
    component: EnrollmentForm
  },

  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full'
  }

];