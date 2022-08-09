import { Component, OnInit } from '@angular/core';
import { HolidaysService } from '../holidays.service';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  Holidays:any[]=[]
  constructor(private holidays: HolidaysService) { }
  // GetHolidays(){
  //     this.holidays.getHolidays().subscribe(data =>this.Holidays = data )
  //     console.log(this.holidays.getHolidays())
  // }
  
  api_key = '28eba68880cd4c8ea9c83f8fd0296afb'
  public country:any
  public year : any
  public month : any
  public day : any
  getHolidays(){
    console.log(this.country);
    this.holidays.getHolidays(this.api_key,this.country,this.year, this.month, this.day).subscribe(data =>this.Holidays = data )
  }
  ngOnInit() {
  
    this.holidays.getHolidays(this.api_key,this.country,this.year, this.month, this.day).subscribe(data =>this.Holidays = data )
   
  }

}
