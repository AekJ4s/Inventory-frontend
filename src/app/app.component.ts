import { ApplicationModule, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCreateComponent } from './views/productsCreate/productsCreate.components';
import { ProductById } from './views/productsById/productsbyid.components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProductListComponent } from './views/productsList/productsList.components';
import { ProductsPlaza } from './views/productPlaza/productsPlaza.components';
import { TransactionsBuying } from './views/์transactionBuying/transactionsBuying.components';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, TransactionsBuying, ProductsPlaza, ProductListComponent, MatSidenavModule, ProductCreateComponent, ProductById, RouterModule, FormsModule, CommonModule, RouterOutlet, MatToolbarModule, MatTabsModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Inventory Angular';
  timeupdate = Date()
  timenow = new Date()
  thailandTime: string = this.timenow.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' })
}
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('API was called:', request.url);
    return next.handle(request);
  }
}









