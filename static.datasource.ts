import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource {
	private products: Product[] = [
 new Product(1, "Happy Shirt", "Shirts", "A shirt for a happy occasion", 50),
 new Product(2, "Edgy Shirt", "Shirts", "Fashionable shirt", 50),
 new Product(3, "Tank Top", "Shirts", "For work and working out", 40),
 new Product(4, "Sweater", "Shirts", "Great for those cold nights at home", 55.99),
 new Product(5, "Turtleneck", "Shirts", "Edgy yet proper", 62),
 new Product(6, "Jean Shirt", "Shirts", "For an old school style", 72.99),
 new Product(7, "Dress Shirt", "Shirts", "Great for work", 35),
 new Product(8, "Jeans", "Pants", "Casual style", 60),
 new Product(9, "Slacks", "Pants", "Comfy and stlish", 72),
 new Product(10, "Dress Pants", "Pants", "When you need to give a good impression", 69.99),
 new Product(11, "Ripped Jeans", "Pants", "Goes great with the edgy shirt", 65),
 new Product(12, "Pantaloons", "Pants", "16th Century style brought back", 20),
 new Product(13, "Baseball Cap", "Hats", "You can customize with your favorite team", 15),
 new Product(14, "Cowboy Hat", "Hats", "A head turner indeed", 20),
 new Product(15, "Ten Gallon Hat", "Hats", "Standard texas style", 40),
 new Product(16, "Black Belt", "Belts", "Sometimes you just need a belt", 10),
 new Product(17, "Brown Belt", "Belts", "Better when you have brown shoes", 5),
 new Product(18, "Full Suit", "Outfits", "Something to impress those at work", 150),
 new Product(19, "Pajamas", "Outfits", "For when you're ready to sleep", 120),
 new Product(20, "Cowboy Costume", "Outfits", "Great for the upcoming halloween season", 175),
 ];
 ];

 getProducts(): Observable<Product[]> {
 return Observable.from([this.products]);
 }

 saveOrder(order: Order): Observable<Order> {
 console.log(JSON.stringify(order));
 return Observable.from([order]);
 }
}