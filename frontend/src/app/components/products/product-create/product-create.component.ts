import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  atributo = "Outra coisa.";
  constructor(){}
  fazAlgo():void{
    console.log("Qualquer coisa.");
  }

}
