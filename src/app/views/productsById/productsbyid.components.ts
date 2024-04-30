import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'productbyid-component',
    standalone: true, 
    templateUrl: './productsbyid.components.html',
    styleUrl: './productsbyid.components.css',
    imports: [FormsModule,CommonModule]
})
export class ProductById {
    products = new products();
    constructor(private productsService : ProductServices){ }

    onSubmit(){
        this.productsService.get(this.products.id).subscribe(
            (result) => {
                this.products=result
            },
            (error) => {
                console.error(error);
            }
            
        );
    }

    nameIsNull(){
        if(this.products.name ==""||this.products.name==null) return false
        return true
    }
}