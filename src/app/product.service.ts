import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductInterface } from './product';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url:string = '/assets/data/products.json';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(this.url).pipe(
      retry(1),
      catchError(this.handleError)
    );;
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = 'Error: ${error.error.message}';
    } else {
      // server-side error
      errorMessage = 'Error Code:' + error.status + '\nMessage: ${error.message}';
    }

    return throwError(errorMessage);
  }
}
