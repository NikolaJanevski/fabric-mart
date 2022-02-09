import { Component } from '@angular/core';
import { mock_product_list } from './store/mock_product_list';
import { ProductItemModel } from './store/product-item.model';
import { category_list } from './categories/category_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fabric-mart';
  
}
