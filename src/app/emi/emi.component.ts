import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {
  title = "EMI Calculator";

  amount;
  rate;
  year;
  emi;
  total;
  diff;

  constructor() {
    this.amount = 500000;
    this.rate = 10.99;
    this.year = 5;
  }
  
  ngOnInit() {
    this.modelChanged();  
  }
  
  modelChanged() {
    let m = 12;

    let p = this.amount;
    let r = (this.rate/100)*(1/m);
    let n = this.year * m;

    this.emi = p*r*(Math.pow((1+r),n) / ((Math.pow((1+r),n))-1));
    this.total = this.emi * n;
    this.diff = this.total - this.amount;
  }

}
