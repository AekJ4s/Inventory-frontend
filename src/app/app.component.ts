import { ApplicationModule, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './views/productsCreate/productsCreate.components';
import { ProductById } from './views/productsById/productsbyid.components';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductListComponent } from './views/productsList/productsList.components';
@Component({
  selector: 'app-root',
  standalone: true,
  
  imports: [ProductListComponent,MatSidenavModule,ProductCreateComponent,ProductById,RouterModule,FormsModule,CommonModule,RouterOutlet , MatToolbarModule , MatTabsModule , MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inventory Angular';
  arraySample = [1,3,99,6,8]
  testInput = ""
 
}


