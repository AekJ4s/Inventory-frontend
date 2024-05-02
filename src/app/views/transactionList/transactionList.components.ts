import { Component } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import transactions from "../../models/transactions";
import { Transactionservices } from "../../services/Transactions.service";
import { ProductServices } from "../../services/Products.service";
import { CategoryServices } from "../../services/Category.service";
import catigories from "../../models/catigories";
import products from "../../models/products";
import transactionTypes from "../../models/transactionTypes";
import { TransactionTypeService } from "../../services/TransactionsType.service";
@Component({
    selector: 'transactionList-component',
    standalone: true,
    templateUrl: './transactionList.components.html',
    styleUrl: './transactionList.components.css',
    imports: [CommonModule,RouterModule,RouterOutlet]
})

export class TransactionListComponent {
    Alltransaction : transactions [] = []
    AlltransactionType : transactionTypes[] = []
    Allproduct : products[] = []
    Allcategory : catigories[] = []
    constructor(
      private route: ActivatedRoute,
      private productServices: ProductServices,
      private categoryService : CategoryServices,
      private transactionService : Transactionservices,
      private transactionTypeService : TransactionTypeService,

        ) {}



        ngOnInit() {
          // ALL TRANSACTIONS
          this.transactionService.ViewTransection().subscribe(
              (result) => {
                console.log(result)
                  this.Alltransaction = result
              },
              (error)=> {
                  console.error(error);
              }
          );
          
          // ALL PRODUCTS
          this.productServices.GetAllProduct().subscribe(
            (result) => {
                this.Allproduct = result
            },
            (error)=> {
                console.error(error);
            }
        );

        // ALL CATEGORY
        this.categoryService.ViewCatigories().subscribe(
          (result) => {
              this.Allcategory = result
          },
          (error)=> {
              console.error(error);
          }
          
        );
            //ALL Transaction TYPE
            this.transactionTypeService.ViewTransectionType().subscribe(
              
              (result) => {
                  this.AlltransactionType = result;
              },
              (error)=> {
                  console.error(error);
              }
              
          );
      (console.log("TransactionType", this.AlltransactionType))

      }


    onDelete(data: number) {
        this.transactionService.CancelTransaction(data).subscribe(
          () => {
            console.log(data)
            window.location.reload();
          },
          (error) => {
            console.error("เกิดข้อผิดพลาดในการลบข้อมูล:", error);
          }
        );
      }
  
      
}