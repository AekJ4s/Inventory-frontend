import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import { ActivatedRoute } from "@angular/router";
import catigories from "../../models/catigories";
import { CategoryServices } from "../../services/Category.service";
import { Module } from "module";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'productsUpdate-component',
    standalone: true,
    templateUrl: './productsUpdate.components.html',
    styleUrl: './productsUpdate.components.css',
    imports: [FormsModule,CommonModule]
})

export class ProductsUpdateComponent{
    product = new products();
    category : catigories[] = []
    constructor(
    private route: ActivatedRoute,
    private productServices: ProductServices,
    private catService : CategoryServices
      ) {}
    
    
     
      ngOnInit() {
        if(this.product.id != null){
        this.route.params.subscribe((params) => {
          this.product.id = +params['id'];
            this.catService.ViewCatigories().subscribe((data) => {
                this.category = data
                console.log("category" , this.category);
            });
        })
        this.productServices.get(this.product.id).subscribe(
            (result) => {
                this.product = result;
            },
            (error) => {
                console.error(error);
            })
      }
      
    }
    

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