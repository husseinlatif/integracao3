import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from "./../services/auth/auth.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {


    republicForm;

    constructor(public formbuilder: FormBuilder, public router: Router, public authservice: AuthService) {
      this.republicForm = this.formbuilder.group({
        title: [null, [Validators.required]],
        rental_per_month: [null, [Validators.required]],
        address: [null, [Validators.required]]
      });
    }

    submitForm(){
        console.log("entrei");

        this.authservice.createRepublic(this.republicForm.value).subscribe(
          (res)=> {
            console.log(res);
            console.log("republica ta no db já");


          },
          (err) => {
            console.log(err);
          }
        );
    }


}
