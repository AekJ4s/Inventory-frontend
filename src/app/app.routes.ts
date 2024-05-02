import { Routes } from '@angular/router';
import { ProductCreateComponent } from './views/productsCreate/productsCreate.components';
import { ProductById } from './views/productsById/productsbyid.components';
import { ProductsUpdateComponent } from './views/productUpdate/productsUpdate.components';
import { ProductDelete } from './views/productsDelete/productDelete.components';
import { ProductListComponent } from './views/productsList/productsList.components';
import { TransactionListComponent } from './views/transactionList/transactionList.components';
import { CategoryListComponent } from './views/catigoriesList/categoriesList.components';
import { CategoryCreateComponent } from './views/catigoriesCreate/categoriesCreate.components';
import { AppComponent } from './app.component';
export const routes: Routes = [

    {path:'createproducts',component: ProductCreateComponent},
    {path:'updateproducts/:id',component: ProductsUpdateComponent},
    {path:'productlist',component: ProductListComponent},
    {path:'productsearch/:id',component: ProductById},
    {path:'productsdelete/:id',component: ProductDelete},

    {path:'categorylist',component: CategoryListComponent},
    {path:'categorycreate',component: CategoryCreateComponent},


    {path:'transactionlist', component: TransactionListComponent}

];