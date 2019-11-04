import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../app/product.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreationComponent } from './product-creation/product-creation.component';
import { ProductEditComponent} from './product-edit/product-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductCreationComponent, // declarations are for components
    ProductEditComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule,  // imports for modules
    FormsModule
  ],

  providers: [ProductService],  // here for services 
  bootstrap: [AppComponent]
})
export class AppModule { }
