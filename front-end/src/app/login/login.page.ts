import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from "./../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  loginForm;

  constructor(public formbuilder: FormBuilder, public router: Router, public authservice: AuthService) {
    this.loginForm = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  submitForm(){
      console.log("entrei");

      this.authservice.login(this.loginForm.value).subscribe(
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
