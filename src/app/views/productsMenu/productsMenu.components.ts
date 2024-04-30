import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { error } from "console";
import products from "../../models/products";
import { ProductServices } from "../../services/Products.service";
import { ProductById } from "../productsById/productsbyid.components";
import { ProductCreateComponent } from "../productsCreate/productsCreate.components";
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgIf } from "@angular/common";
import { ProductsUpdateComponent } from "../productUpdate/productsUpdate.components";
import { ProductListComponent } from "../productsList/productsList.components";
import { ProductDelete } from "../productsDelete/productDelete.components";
@Component({
    selector: 'productMenu-component',
    standalone: true,
    templateUrl: './productsMenu.components.html',
    styleUrl: './productsMenu.components.css',
    imports: [ProductDelete,ProductById,ProductListComponent,ProductsUpdateComponent,NgIf,MatGridListModule,RouterOutlet,RouterModule,FormsModule,ProductCreateComponent]
})


export class ProductsMenu{
     NEWPRO = false;
     UPDATEPRO = false;
     SEARCHPRO = false;
     DELETEPRO = false;
          
     NEWPROclicked() {
        this.NEWPRO = !this.NEWPRO
        console.log(this.NEWPRO)
     }

     UPDATEPROclicked(){
        this.UPDATEPRO = !this.UPDATEPRO
     }

     SEARCHPROclicked(){
        this.SEARCHPRO = !this.SEARCHPRO
     }

     DELETEPROclicked(){
        this.DELETEPRO = !this.DELETEPRO
     }
     onSubmit(){
        // this.productsService.post(this.products).subscribe(
        //     (result) => {
        //         window.location.reload();
        //     },
        //     (error) => {
        //         console.error(error);
        //     }
        // );
    }
}
