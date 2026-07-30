import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditLabelPipe } from '../../pipes/credit-label';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    CreditLabelPipe
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard {

  @Input() course!: any;

  isExpanded = false;


  constructor(
    public enrollmentService: EnrollmentService
  ) {}


  get enrolled(): boolean {

    return this.enrollmentService.isEnrolled(
      this.course.id
    );

  }


  get cardClasses(){

    return {
      'card--enrolled': this.enrolled,
      'card--full': this.course?.credits >= 4,
      'expanded': this.isExpanded
    };

  }


  toggleDetails(){

    this.isExpanded = !this.isExpanded;

  }


  toggleEnrollment(){

  console.log("Clicked:", this.course);

  if(this.enrolled){

    this.enrollmentService.unenroll(this.course.id);

  }
  else{

    this.enrollmentService.enroll(this.course);

  }

  console.log(
    "AFTER CLICK:",
    this.enrollmentService.getEnrolledCourses()
  );

}
}