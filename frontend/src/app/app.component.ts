import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import "../styles.css";
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatToolbarModule],
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
