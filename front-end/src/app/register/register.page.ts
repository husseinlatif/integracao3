import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from "./../services/auth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  registerForm;

  constructor(public formbuilder: FormBuilder, public router: Router, public authservice: AuthService) {
    this.registerForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      name: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]]
    });
  }

  submitForm(){
      console.log("entrei");
      this.authservice.register(this.registerForm.value).subscribe(
        (res)=> {
          console.log(res);
          localStorage.setItem('userToken', res.success.token);
          this.router.navigate(['/home2'])

        },
        (err) => {
          console.log(err);
        }
      );
  }

}
