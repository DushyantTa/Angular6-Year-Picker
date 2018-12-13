import { Component, OnInit } from '@angular/core';
import { Year } from '../year';
import { DropdownVal } from '../dropdown-val';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.css']
})
export class YearPickerComponent implements OnInit {

  constructor() { }
  isSelected = false;
  
  from = Number(Math.floor(Number(new Date().getFullYear())/10))*10;
  to = Number(this.from) + 9;

  year: Year = {
    yr: ""+new Date().getFullYear()
  };

  list = [];
  selectedYear: Year;
  
  ngOnInit() {
    for (let index = this.from-1; index <= this.to+1; index++) {
      this.list.push(index);
    }
  }

  onSelect(yar: Year): void {
    this.selectedYear = yar;
    this.year.yr = ""+yar;
    this.isSelected = false;
	}

  show(){
    this.isSelected = true;
  }

  next(){
    this.from = Number(this.to)+1;
    this.to = Number(this.from)+9;
    this.list.length = 0;
    for (let index = this.from-1; index <= this.to+1; index++) {
      this.list.push(index);
    }
  }
  prev(){
    this.to = Number(this.from)-1;
    this.from = Number(this.to)-9;
    this.list.length = 0;
    for (let index = this.from-1; index <= this.to+1; index++) {
      this.list.push(index);
    }
  }
}
