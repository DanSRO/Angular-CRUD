import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from '../../components/template/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { ProductCreateComponent } from '../../components/products/product-create/product-create.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatCardModule, NavComponent, RouterModule, ProductCreateComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
