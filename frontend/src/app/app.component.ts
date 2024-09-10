import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    MatCardModule, 
    RouterModule,
    ProductCreateComponent
  ],
  template: `
    <h1>Bem-vindo ao projeto {{title}}!</h1>

    <router-outlet />
  `,
  templateUrl:'app.component.html',
  styles: [],
})
export class AppComponent {
  name = 'Maria';
}
