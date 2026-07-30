import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  private enrolledCourses: Course[] = [];

  constructor() {}

  enroll(course: Course) {

    const alreadyExists = this.enrolledCourses.some(
      c => c.id === course.id
    );

    if (!alreadyExists) {
      this.enrolledCourses.push(course);
    }

    console.log(this.enrolledCourses);
  }


  unenroll(courseId: number) {

    this.enrolledCourses =
      this.enrolledCourses.filter(
        c => c.id !== courseId
      );

    console.log(this.enrolledCourses);
  }


  isEnrolled(courseId: number): boolean {

    return this.enrolledCourses.some(
      c => c.id === courseId
    );

  }


  getEnrolledCourses(): Course[] {

    return this.enrolledCourses;

  }

}