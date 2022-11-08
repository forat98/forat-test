import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})

export class UserFormComponent implements OnInit {
  userFormData!:FormGroup;
  submitted = false;
  successForm=false;
  constructor(private fb: FormBuilder) {

   }

  ngOnInit() {
    this.userFormData=this.fb.group(
      {
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        MobileNumber: ['', Validators.required],
        phoneNumber: ['', Validators.required],
        address: ['', Validators.required],
        userData: ['', Validators.required],
        }
      )
  }

  get f(): { [key: string]: AbstractControl } {
    return this.userFormData.controls;
  }

  onSubmitForm(){
    this.submitted=true;
    if (this.userFormData.invalid) {
      return;
    }
    const dataForm=JSON.stringify(this.userFormData.value, null, 2)
    console.log(JSON.parse(dataForm))

    if(!this.userFormData.invalid){
      this.successForm=true;

     setTimeout(() => {
      this.successForm=false;

     }, 2000);
    }

  }

}

