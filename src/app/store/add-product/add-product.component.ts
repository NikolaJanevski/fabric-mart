import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../product-item.model';
import { ProductsService } from '../products.service';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ProductsService) { }

  ngOnInit(): void {
  }

  addProduct(product:ProductItemModel) {
    this.ps.addProduct(product);
  }
}
