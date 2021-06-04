import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.maxLength(15)]
      }),
      email: new FormControl(null, {
        updateOn: 'blur',
        validators: Validators.compose([
          Validators.required,
        Validators.email
      ])
      }),
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: Validators.compose([
          Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]+$')
      ])
      })
    });
  }

  onUserSend(){
    console.log(this.userForm);
  }
}
