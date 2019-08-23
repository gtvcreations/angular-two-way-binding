import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  title = "List of Products";

  public products = [];
  public errorMsg;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(
      data => this.products = data,
      error => this.errorMsg = error
    );
  }

}
