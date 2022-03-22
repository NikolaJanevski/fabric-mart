import { Component, OnInit } from "@angular/core";
import { ProductItemModel } from "./product-item.model";
import { ProductsService } from "./products.service";

@Component({
  selector: 'fm-designer-quality',
  templateUrl: 'designer-linen-layout.component.html',
  styleUrls: ['designer-linen-layout.component.css']
})
export class DesignerLinenLayoutComponent implements OnInit {
  products: ProductItemModel[] = [];

  constructor(private productsService:ProductsService) {
  }
  
  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: ProductItemModel []) => {
      console.log("Fetching products");
      for (var product of data) {
        console.log(product);
        this.products.push(product);
      }
    });
  }
}