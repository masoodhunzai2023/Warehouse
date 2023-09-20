import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'assets/products.json';

  constructor(private http: HttpClient) { }

  saveProduct(product: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, product);
  }
}
