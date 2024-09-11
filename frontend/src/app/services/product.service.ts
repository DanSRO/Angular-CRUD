import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product{
  id:number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  private products: Product[]=[];

  constructor() { }

  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p=>p.id === id);    
    return of(product!);
  }

  getProductsAll(): Observable<Product[]> {    
    return of(this.products);
  }
  addProduct(product:Product): void{
    this.products.push(product);
  }
  updateProduct(updatedProduct:Product): void{
    const index = this.products.findIndex(p=> p.id === updatedProduct.id);
    if(index !== -1){
      this.products[index] = updatedProduct; 
    }
  }
  deleteProduct(id:number):void{
    this.products=this.products.filter(p => p.id !== id);
  }
}
