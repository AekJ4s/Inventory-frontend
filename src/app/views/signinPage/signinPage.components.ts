import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from "@angular/common";
import { CategoryServices } from "../../services/Category.service";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import login from "../../models/login";
import { LoginServices } from "../../services/Login.service";
@Component({
    selector: 'signinPage-component',
    standalone: true,
    templateUrl: './signinPage.components.html',
    styleUrl: './signinPage.components.css',
    imports: [RouterModule,MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class SigninPageComponent{
    Login = new login();
    constructor(private loginService: LoginServices, private router: Router) { }


   
    
    onSubmit(){
        
        this.loginService.Post(this.Login).subscribe(
            (result) => {
                this.router.navigate(['productlist']);
                console.log(result);
            },
            (error) => {
                console.error(error);
            }
        );
    }

}