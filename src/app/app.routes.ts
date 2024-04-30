import { Routes } from '@angular/router';
import { ProductCreateComponent } from './views/productsCreate/productsCreate.components';
import { ProductById } from './views/productsById/productsbyid.components';
import { ProductsMenu } from './views/productsMenu/productsMenu.components';
import { ProductsUpdateComponent } from './views/productUpdate/productsUpdate.components';
import { ProductListComponent } from './views/productsList/productsList.components';
import { ProductDelete } from './views/productsDelete/productDelete.components';
export const routes: Routes = [
    {path:'createproducts',component: ProductCreateComponent},
    {path:'menuproducts',component: ProductsMenu},
    {path:'updateproducts/:id',component: ProductsUpdateComponent},
    {path:'productlist',component: ProductListComponent},
    {path:'productsearch/:id',component: ProductById},
    {path:'productsdelete/:id',component: ProductDelete}

];