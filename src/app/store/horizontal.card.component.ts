import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-horizontal-card',
    templateUrl: 'horizontal.card.component.html',
    styleUrls: ['horizontal.card.component.css']
})
export class HorizontalCardComponent {
    @Input() img: string;
    @Input() price: number;
    @Input() sku: string;
    @Input() description: string;

    constructor() {
        this.img = "";
        this.price = 0;
        this.sku = "XXXXX";
        this.description = "Missing Description";
    }
}