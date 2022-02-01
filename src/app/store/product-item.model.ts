export class ProductItemModel {
    img: string;
    price: number;
    sku: string;
    description: string;

    constructor(img: string, price:number, sku:string, description:string) {
        this.img = img;
        this.price = price;
        this.sku = sku;
        this.description = description;        
    }
}