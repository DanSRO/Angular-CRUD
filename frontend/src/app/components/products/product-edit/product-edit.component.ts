import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent implements OnInit{
  product!:Product;  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ){}
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id).subscribe(product => this.product = product!);
  }
  updateProduct():void{
    this.productService.updateProduct(this.product); 
    this.router.navigate(['/products']);
  }
}
