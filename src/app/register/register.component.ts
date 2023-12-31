import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor (private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required], 
      emailAddress: ['', Validators.required],
      city: ['', Validators.required],
      password: ['', Validators.required, Validators.min(6)]
    });
  }

  onSubmitMemberRegisterForm() {
    
  }

}
