import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from "app/signup-form/signup.interface";

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
user:FormGroup
  ngOnInit()   {
    this.user = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('',Validators.required),
        confirm: new FormControl('',Validators.required)
      })
    })
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    console.log(value, valid);
  }
}
