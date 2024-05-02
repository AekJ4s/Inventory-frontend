import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import { ProductsUpdateComponent } from "../productUpdate/productsUpdate.components";
@Component({
    selector: 'productsList-component',
    standalone: true,
    templateUrl: './productsList.components.html',
    styleUrl: './productsList.components.css',
    imports: [ProductsUpdateComponent,RouterModule,CommonModule,RouterModule,RouterOutlet]
})

export class ProductListComponent {
    Allproduct : products[] = []
    productId : any 
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

    onDelete(data: number) {
        this.productsService.DeleteProduct(data).subscribe(
          () => {
            console.log(data)
            window.location.reload();
          },
          (error) => {
            console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
          }
        );
      }

      // onEdit(data: number) {
      //   this.productsService.PUT(data).subscribe(
      //     () => {
      //       console.log(data)
      //       window.location.reload();
      //     },
      //     (error) => {
      //       console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
      //     }
      //   );
      // }
  
    
}