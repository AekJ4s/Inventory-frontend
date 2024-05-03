import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import products from '../../models/products';
import { ProductServices } from '../../services/Products.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgFor } from '@angular/common';
import catigories from '../../models/catigories';
import { CategoryServices } from '../../services/Category.service';
import { Transactionservices } from '../../services/Transactions.service';
import transactions from '../../models/transactions';
import { Router } from '@angular/router';
@Component({
    selector: 'transactionsOUT-component',
    standalone: true,
    templateUrl: './transactionsOUT.components.html',
    styleUrl: './transactionsOUT.components.css',
    imports: [
        CommonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        MatFormFieldModule,
        NgFor,
    ],
})
export class TransactionsOutOfDate {
    transaction = new transactions();
    amount = 0;
    yourdad = false;
    Thisproduct: string = '';
    constructor(
        private transactionService: Transactionservices,
        private router: Router
    ) { }

    @Input() optionOuting = {
        popup: false,
        product: new products(),
    };

    onSubmit() {
        this.transaction.productId = this.optionOuting.product.id;
        this.transaction.quantity = this.amount;
        if (
            this.transaction.quantity < this.optionOuting.product.stockQuantity &&
            this.transaction.quantity > 0
        ) {
            this.transactionService.BuyProduct(this.transaction).subscribe(
                (result) => {
                    this.router.navigate(['transactionlist']);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            this.yourdad = true;
        }
    }

    lostfocus() {
        this.optionOuting.popup = false;
    }
}
