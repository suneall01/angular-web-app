import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = []

  addToCart(p: Product) {
    this.items.push(p)
  }

  clearCart() {
    this.items = []
    return this.items
  }
  
  getItems() {
    return this.items
  }
}
