import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';

import { noCourseCode } from '../../validators/no-course-code';
import { simulateEmailCheck } from '../../validators/email-check';


@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css'
})


export class ReactiveEnrollmentForm implements OnInit {


  enrollForm!: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {


    this.enrollForm = this.fb.group({

      studentName: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],


      studentEmail: [

        '',

        [
          Validators.required,
          Validators.email
        ],

        [
          simulateEmailCheck
        ]

      ],


      courseId: [

        '',

        [
          Validators.required,
          noCourseCode
        ]

      ],


      preferredSemester: [

        'Odd',

        Validators.required

      ],


      agreeToTerms: [

        false,

        Validators.requiredTrue

      ],


      additionalCourses: this.fb.array([])

    });


  }



  get additionalCourses(): FormArray {

  return this.enrollForm.get('additionalCourses') as FormArray;

}


  addCourse() {

    this.additionalCourses.push(

      new FormControl(
        '',
        Validators.required
      )

    );

  }



  removeCourse(index: number) {

    this.additionalCourses.removeAt(index);

  }



  onSubmit() {


    console.log(
      "Form Value:",
      this.enrollForm.value
    );


    console.log(
      "Raw Value:",
      this.enrollForm.getRawValue()
    );


  }


}