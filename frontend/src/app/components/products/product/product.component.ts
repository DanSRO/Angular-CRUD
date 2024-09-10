import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterModule, ProductCreateComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  constructor(private router: Router){}
  createProduct (): void{
    this.router.navigate(['products/create']);
  }
}
