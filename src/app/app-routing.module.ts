import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'all_products',component:AllProductsComponent},
  {path:'add_new_product',component:AddProductsComponent},
  {path:'inventory',component:InventoryComponent},
  {path:'reports',component:ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
