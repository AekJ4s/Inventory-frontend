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
@Component({
    selector: 'productDelete-component',
    standalone: true,
    templateUrl: './productDelete.components.html',
    styleUrl: './productDelete.components.css',
    imports: [MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class ProductDelete {
    product = new products();
    constructor(private productService: ProductServices) {
        
    }
  
    onSubmit() {
        this.productService.DeleteProduct(this.product.id).subscribe(
          () => {
            console.log(this.product.id)

            window.location.reload();
          },
          (error) => {
            console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
          }
        );
      }
  
    nameIsNull() {
      if (this.product.name == '' || this.product.name == null) return false;
      return true;
    }
  }