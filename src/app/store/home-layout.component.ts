import { Component } from "@angular/core";
import { category_list } from "../categories/category_list";
import { mock_product_list } from "./mock_product_list";
import { ProductItemModel } from "./product-item.model";

@Component({
    selector: 'fm-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent {
    
    category_list: any = category_list;
}