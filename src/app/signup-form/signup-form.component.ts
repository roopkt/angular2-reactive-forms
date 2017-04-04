import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
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
      name: new FormControl(''),
      account: new FormGroup({
        email: new FormControl(''),
        confirm: new FormControl('')
      })
    })
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
    console.log(value, valid);
  }
}
