import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css']
})
export class VerticalCardComponent {
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