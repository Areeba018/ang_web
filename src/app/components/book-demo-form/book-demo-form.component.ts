import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-book-demo-form',
  standalone: true,  // Mark as standalone
  imports: [ReactiveFormsModule, CommonModule],  // Import ReactiveFormsModule here
  templateUrl: './book-demo-form.component.html',
  styleUrls: ['./book-demo-form.component.css']
})
export class BookDemoFormComponent {
  demoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.demoForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.demoForm.valid) {
      console.log('Form submitted:', this.demoForm.value);
      alert('Demo booked! We will reach out to you soon 🚀');
      this.demoForm.reset();
    }
  }
}



//   🧠 Summary:
// ReactiveFormsModule: Enables reactive form features
// FormBuilder: Makes it easy to build form groups
// FormGroup: Represents the whole form
// Validators: Adds validation rules to inputs

// ReactiveFormsModule
// Module that enables the use of reactive forms.
// It provides the <form [formGroup]>, formControlName, etc., functionality.

// FormBuilder
// A helper service that simplifies form creation.
// Instead of manually creating controls, you can quickly generate a form group.
      // this.form = this.fb.group({
      //   name: ['', Validators.required]
      // });

// FormGroup
// Represents the entire form.
// It's a collection of controls, like name, email, message, etc.
// You use FormGroup to track the state and validity of the whole form.
      // this.form = new FormGroup({
      //   name: new FormControl('')
      // });


// Validators
// A set of built-in functions used to apply validation rules on form fields.
// Common ones:
// Validators.required → field is mandatory