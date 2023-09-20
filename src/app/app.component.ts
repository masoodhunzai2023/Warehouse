import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private http: HttpClient) { }

  saveFormData(formData: any) {
    const url = 'Warehouse\src\assets\products.json';
    const data = JSON.stringify(formData);
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(url, data, { headers }).subscribe(
      (response) => {
        console.log('Form data saved successfully!', response);
      },
      (error) => {
        console.error('Failed to save form data!', error);
      }
    );
  }
}
