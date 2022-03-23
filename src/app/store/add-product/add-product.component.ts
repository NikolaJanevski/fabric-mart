import { Component, OnInit } from '@angular/core';
import { ProductItemModel } from '../product-item.model';

@Component({
  selector: 'fm-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(product:ProductItemModel) {
    console.log("You clicked add product");
    console.log(product);
  }
}
