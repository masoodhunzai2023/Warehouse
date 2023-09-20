import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { ProductService } from '../product.service';
// import { Product } from '../product_model/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 productInfo:any
 
 public constructor(private http:HttpClient, private productService: ProductService)
 { }

 loginForm=new FormGroup({
  id:new FormControl('',Validators.required),
  description:new FormControl('',Validators.required),
  quantity:new FormControl('',Validators.required),
  unitPrice:new FormControl('',Validators.required)
})


get id()
{

 return this.loginForm.get('id');
}
get description()
{
  return this.loginForm.get('description');
}
get quantity()
{
  return this.loginForm.get('quantity');
}
get unitPrice()
{
  return this.loginForm.get('unitPrice');
}

LoginForm() {
  localStorage.setItem('product', JSON.stringify(this.loginForm.value))
  if (this.loginForm.valid) {
    const productInfo = this.loginForm.value;
    this.productService.saveProduct(productInfo).subscribe(
      (response) => console.log('response',response),
      (error) => console.log(error)
    );
  }

}

}
