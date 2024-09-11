import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component'; 
import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductService } from './services/product.service';
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
    },
    {
        path:"product/edit/:id",
        component:ProductEditComponent
    },
    {
        path:"product/list",
        component:ProductListComponent
    }
];
