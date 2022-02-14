import { Component } from "@angular/core";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'fm-designer-quality',
    templateUrl: 'designer-linen-layout.component.html',
    styleUrls: ['designer-linen-layout.component.css']
})
export class DesignerLinenLayoutComponent {
    products: ProductItemModel [] = [];

    constructor() {
        for (var product of mock_product_list) {
          console.log(product);
          this.products.push(product);
        }
      }
}