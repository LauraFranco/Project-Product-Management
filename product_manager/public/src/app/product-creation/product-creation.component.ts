import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})

export class ProductCreationComponent implements OnInit {
  newTitle = {};
  newPrice = Number;
  newImage = {};
  error: any;
  replyErrors: string [];

  constructor(private _productService: ProductService , private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {

  }

  addProduct(productForm: NgForm){
    console.log(productForm);
    let observable = this._productService.addProduct(productForm.value);
    observable.subscribe({next:data =>{
      console.log("I'm in adding new!!!", data);
      this._router.navigate(['/products'])
    },
    error: error => {
      console.log(error);
      this.replyErrors = error.error;
    }
  })
}
}
