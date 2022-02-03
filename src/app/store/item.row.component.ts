import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-item-row',
    templateUrl: 'item.row.component.html',
    styleUrls: ['item.row.component.css']
})
export class ItemRowComponent {
    @Input() price: number;
    @Input() sku: string;
    @Input() description: string;

    constructor() {
        this.price = 0;
        this.sku = "XXXXX";
        this.description = "Missing Description";
    }
}