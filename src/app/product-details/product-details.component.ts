import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  // standalone: true,
  // imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(private route: ActivatedRoute, private cart: CartService) {}

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const id = Number(params.get('productId'));

    this.product = products.find((p) => p.id == id);
  }

  buy(p: Product) {
    this.cart.addToCart(p);
  }
}
