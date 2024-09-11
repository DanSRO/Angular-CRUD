import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  product: Product = { id: 0, name: '', price:0};
  constructor(private productService: ProductService, private router: Router){}
  createProduct():void{
    this.productService.addProduct(this.product);
    this.router.navigate(['/products']);
  }

}
