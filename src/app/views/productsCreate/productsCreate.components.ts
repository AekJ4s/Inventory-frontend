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
import { CategoryServices } from "../../services/Category.service";
import catigories from "../../models/catigories";
import { Router } from "@angular/router";
@Component({
    selector: 'productCreate-component',
    standalone: true,
    templateUrl: './productsCreate.components.html',
    styleUrl: './productsCreate.components.css',
    imports: [MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class ProductCreateComponent{
    products = new products();
    category : catigories[] = []
    constructor (private productService : ProductServices ,private catService : CategoryServices , private router: Router) { 
    
    }
   
    ngOnInit(): void {
        this.catService.ViewCatigories().subscribe((data) => {
            this.category = data
            console.log("category" , this.category );
        });
    }

    onSubmit(){
        console.log(this.products);
        this.productService.post(this.products).subscribe(
            (result) => {
                this.router.navigate(['productlist']);

            },
            (error) => {
                console.error(error);
            }
        );
    }

}