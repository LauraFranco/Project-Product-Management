import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})

export class ProductEditComponent implements OnInit {
  editedTitle: { title: string };
  editedPrice: { price: number };
  editedImage: { image: string };
  product: any;
  id: string;
  error: any;
  replyErrors: string [];

  constructor(private _productService: ProductService , private _router:Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    // this.editedTitle = {title: ""};
    // this.editedPrice = { price: 0 };
    // this.editedImage = {image: ""};
    // this.product = {product: {title: ""}};
    this._route.params.subscribe((params)=>{
    this.id = params.id;
    this.findProduct();
    console.log("GOT ID", this.id);
    })
  }

  findProduct(){
      let observable = this._productService.getProduct(this.id).subscribe((data:any)=>{
        this.product = data.product;
        console.log("hey hey got this product!!!!!", this.product);
      })
  }

  editProduct(editProductForm: NgForm){
    console.log(editProductForm);
    console.log("I am in editing!!!!!!!");

    let observable = this._productService.editProduct(editProductForm.value, this.id);
    // (this.id,this.editedTitle.title)
    observable.subscribe({next:data =>{
      console.log("I'm in adding new!!!", data);
      this._router.navigate(['/'])
    },
    error: error => {
      console.log(error);
      this.replyErrors = error.error;
    }
  })
}

  deleteProduct(id:string){
    console.log("in deleting!!!!")
    let observable = this._productService.deleteProduct(id);
    observable.subscribe(data=>{
      return this._router.navigate(['/']);
    })
  }
}