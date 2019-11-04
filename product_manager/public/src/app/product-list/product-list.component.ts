import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  id: string;
  _router: any;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    let observable = this._productService.getAllProducts();
    observable.subscribe(data => { 
      console.log(data)
      this.products = data ['products']
    });
  }
  deleteProduct(id:string){
    console.log("deleting")
    let observable = this._productService.deleteProduct(id);
    console.log(id);
    observable.subscribe(data=>{
      console.log(data);
      this.getAllProducts();
    })
  }
}
