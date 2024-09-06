import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
