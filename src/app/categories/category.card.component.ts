import { Component, Input } from "@angular/core";

@Component({
    selector: 'fm-category-card',
    templateUrl: 'category.card.component.html',
    styleUrls: ['category.card.component.css']
})
export class CategoryCardComponent {
    @Input() title: string;
    @Input() link_text: string;
    @Input() bg_color: string;

    constructor() {
        this.title = "Missing Title";
        this.link_text = "Missing link text";
        this.bg_color = "black";
    }

}