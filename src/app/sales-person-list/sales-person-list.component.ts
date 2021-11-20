import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "./sales-person";

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

	salesPersonList: SalesPerson[];

  constructor() { }

  ngOnInit(): void {
		this.salesPersonList = [
			new SalesPerson('An', 'Koi', 'ankoi@gmail.com', 10000),
			new SalesPerson('A', 'D', 'AD@gmail.com', 20000),
			new SalesPerson('B', 'E', 'BE@gmail.com', 30000),
			new SalesPerson('C', 'F', 'CF@gmail.com', 40000)
		]
  }

}
