import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'create', component: ProductCreationComponent},
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'products', component: ProductListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
