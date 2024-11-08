import { Routes } from '@angular/router';
// import { authoGuard } from '../guards/autho.guard';
import { RegisterComponent } from './components/register/register.component';
import { MainProductComponent } from './components/main-product/main-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { OrdersComponent } from './components/orders/orders.component';

export const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent,title:"Home Page"},
    {path: "register", component: RegisterComponent, title: "Register"},
    {path: 'home', component: HomeComponent, title: "Home"},
    {path:"Sidebar",component:SidebarComponent,title:"Sidebar"},
    {path: 'single-product', component: ProductDetailsComponent , title : 'Product Details' },
    {path: 'ProductCategory/:id', component: MainProductComponent, title: 'Products Page'},
    {path:"orders",component:OrdersComponent,title:"Orders"}
  ]},
  {path: 'checkout', component: CheckoutComponent, title: 'Checkout'},
  //wild card route
  {path:'**',component:ErrorComponent,title:"Not found"}

];





