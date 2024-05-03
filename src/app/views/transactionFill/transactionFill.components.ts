import { Component, Input, input } from "@angular/core";
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
import { Transactionservices } from "../../services/Transactions.service";
import transactions from "../../models/transactions";
import { Router } from "@angular/router";
@Component({
    selector: 'transactionFill-component',
    standalone: true,
    templateUrl: './transactionFill.components.html',
    styleUrl: './transactionFill.components.css',
    imports: [CommonModule,MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class TransactionsFill{
    transaction = new transactions();
    amount = 0;
    yourdad = false
    Thisproduct : string = "";
    constructor(private transactionService: Transactionservices , private router: Router){ }

   @Input() optionFilling={
    popup : false,
    product : new products()
  }
    
  onSubmit(){
    this.transaction.productId = this.optionFilling.product.id
    this.transaction.quantity = this.amount
    if(this.transaction.quantity > 0 ){
    this.transactionService.BuyProduct(this.transaction).subscribe(
        (result) => {
            this.router.navigate(['transactionlist']);
        },
        (error) => {
            console.error(error);
        }
    );
}else{
    this.yourdad = true;
}
}

    lostfocus() {
    this.optionFilling.popup = false;
    }

}