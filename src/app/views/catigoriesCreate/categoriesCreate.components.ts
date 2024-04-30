import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { NgFor } from "@angular/common";
import catigories from "../../models/catigories";
import { CategoryServices } from "../../services/Category.service";
@Component({
    selector: 'categoriesCreate-component',
    standalone: true,
    templateUrl: './categoriesCreate.components.html',
    styleUrl: './categoriesCreate.components.css',
    imports: [MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class CategoryCreateComponent{
    Category = new catigories();
    constructor(private categoryService : CategoryServices){ }

   
    
    onSubmit(){
        this.categoryService.post(this.Category).subscribe(
            (result) => {
                window.location.reload();
            },
            (error) => {
                console.error(error);
            }
        );
    }

}