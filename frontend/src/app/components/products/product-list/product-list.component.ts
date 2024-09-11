import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  products:Product[] = [];

  constructor(private productService:ProductService){}
  ngOnInit(): void {
      this.productService.getProductsAll().subscribe(product=>this.products = product);
  }
  deleteProduct(id:number):void{
    this.productService.deleteProduct(id);
    this.products=this.products.filter(p=>p.id !==id);
  }
}
