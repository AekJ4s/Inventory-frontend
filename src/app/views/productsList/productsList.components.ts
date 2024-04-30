import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
@Component({
    selector: 'productsList-component',
    standalone: true,
    templateUrl: './productsList.components.html',
    styleUrl: './productsList.components.css',
    imports: [CommonModule,RouterModule,RouterOutlet]
})

export class ProductListComponent {
    Allproduct : products[] = []

    constructor(private productsService: ProductServices) { }
    ngOnInit() {
        this.productsService.GetAllProduct().subscribe(
            (result) => {
                this.Allproduct = result
            },
            (error)=> {
                console.error(error);
            }
        );
    }
}