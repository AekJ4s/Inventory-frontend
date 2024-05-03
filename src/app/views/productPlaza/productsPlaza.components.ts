import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import { ProductsUpdateComponent } from "../productUpdate/productsUpdate.components";
import { Transactionservices } from "../../services/Transactions.service";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatCommonModule } from "@angular/material/core";
import { TransactionsBuying } from "../์transactionBuying/transactionsBuying.components";
import { TransactionsOutOfDate } from "../transactionOut/transactionsOUT.components";
import { TransactionsFill } from "../transactionFill/transactionFill.components";
import { error } from "console";
@Component({
    selector: 'productsPlaza-component',
    standalone: true,
    templateUrl: './productsPlaza.components.html',
    styleUrl: './productsPlaza.components.css',
    imports: [TransactionsFill,TransactionsOutOfDate,TransactionsBuying,FormsModule,CommonModule,MatFormFieldModule,MatDialogModule,ProductsUpdateComponent,RouterModule,MatCommonModule,RouterModule,RouterOutlet]
})

export class ProductsPlaza {
    Allproduct : products[] = []
    productId : any 
    includestat = 0
    thatdata : string = ""
    thisday = new Date().getDate();
    
    constructor(private productsService: ProductServices, private transactionService : Transactionservices,public dialog: MatDialog) { }
    
    ngOnInit() {
        this.productsService.GetAllProduct().subscribe(
            (result) => {
                this.Allproduct = result
                this.Allproduct = this.Allproduct.sort((a, b) => a.stockQuantity - b.stockQuantity);
                console.log("thisDay" , this.thisday)
      console.log(this.Allproduct)
            },
            (error)=> {
                console.error(error);
                
            }
        );
    }

    openBuying(data:products): void {
      this.optionBuying.product = data
      this.optionBuying.popup = !this.optionBuying.popup
    }
    optionBuying={
      popup : false,
      product : new products()
    }
    openOuting(data:products): void {
      this.optionOuting.product = data
      this.optionOuting.popup = !this.optionOuting.popup
    }
    optionOuting={
      popup : false,
      product : new products()
    }
    openFilling(data:products): void {
      this.optionFilling.product = data
      this.optionFilling.popup = !this.optionFilling.popup
    }
    optionFilling={
      popup : false,
      product : new products()
    }
    letinclude(data : any) : void{
      this.includestat = (this.includestat + 1 )%3
      if(this.includestat == 1){ 
      this.Allproduct = this.Allproduct.sort((a, b) => b.stockQuantity - a.stockQuantity)

      }else if(this.includestat == 2){
        this.Allproduct = this.Allproduct.sort((a, b) => a.stockQuantity - b.stockQuantity)
      }
    }
    
}