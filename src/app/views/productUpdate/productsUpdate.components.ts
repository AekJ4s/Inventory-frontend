import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";

@Component({
    selector: 'productsUpdate-component',
    standalone: true,
    templateUrl: './productsUpdate.components.html',
    styleUrl: './productsUpdate.components.css',
    imports: [FormsModule]
})

export class ProductsUpdateComponent{
    product = new products();
    constructor(private productServices: ProductServices){ }

    
    onSubmit(){
        this.productServices.PUT(this.product).subscribe(
            (result) => {
                window.location.reload();
            },
            (error) => {
                console.error(error);
            }
        );
    }
}