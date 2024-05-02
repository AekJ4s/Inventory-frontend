import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule, NgFor } from "@angular/common";
import catigories from "../../models/catigories";
import { CategoryServices } from "../../services/Category.service";
import { RouterLink } from "@angular/router";
@Component({
    selector: 'categoriesList-component',
    standalone: true,
    templateUrl: './categoriesList.components.html',
    styleUrl: './categoriesList.components.css',
    imports: [RouterLink,CommonModule,MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class CategoryListComponent{
    Allcategory : catigories[] = []

    constructor(private categoryService: CategoryServices) { }
    ngOnInit() {
        this.categoryService.ViewCatigories().subscribe(
            (result) => {
                this.Allcategory = result
            },
            (error)=> {
                console.error(error);
            }
        );
    }
}