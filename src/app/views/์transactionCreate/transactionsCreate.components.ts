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
import catigories from "../../models/catigories";
import { CategoryServices } from "../../services/Category.service";
import { Transactionservices } from "../../services/Transactions.service";
import transactions from "../../models/transactions";
import { Router } from "@angular/router";
@Component({
    selector: 'transactionCreate-component',
    standalone: true,
    templateUrl: './transactionsCreate.components.html',
    styleUrl: './transactionsCreate.components.css',
    imports: [MatIconModule,MatInputModule,MatSelectModule,FormsModule,MatFormFieldModule,NgFor]
})

export class TransactionsCreate{
    transaction = new transactions();
    constructor(private transactionService: Transactionservices , private router: Router){ }

   
    
    onSubmit(){
        this.transactionService.post(this.transaction).subscribe(
            (result) => {
                this.router.navigate(['transactionlist']);

            },
            (error) => {
                console.error(error);
            }
        );
    }

}