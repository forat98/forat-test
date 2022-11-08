import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signInForm!:FormGroup;

  constructor(private fb: FormBuilder,private auth:AuthService,private router: Router) { }

  ngOnInit() {
    this.signInForm=this.fb.group(
    {
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      }
    )
  }
  onSubmitForm(){
    this.auth.login(this.signInForm.controls['Email'].value,this.signInForm.controls['Password'].value)
    this.router.navigate(['./Home']);
  }

}
