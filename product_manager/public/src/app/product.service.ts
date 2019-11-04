import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { privateEncrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private _http: HttpClient) {}

  getAllProducts(){
    return this._http.get('/api/products');
  }

  addProduct(product){
    console.log(product);
    return this._http.post('/api/products', product);
  }

  getProduct(id){
    return this._http.get('/api/products/' +id);
  }

  editProduct(data, id){
    console.log(data)
    console.log("I'm in update!!!!", data);
    return this._http.put(`/api/products/${id}`, data);
  }

  deleteProduct(id){
    console.log("I'm in deleting!!!!", id);
    return this._http.delete('/api/products/' +id);
  }
}