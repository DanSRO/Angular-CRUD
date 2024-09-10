import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component'; 

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"products",
        component:ProductComponent
    },
    {
        path:"products/create",
        component:ProductCreateComponent
    } 
];
