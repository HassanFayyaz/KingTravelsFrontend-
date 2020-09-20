import { NzCardModule } from 'ng-zorro-antd/card';
import { TravelFairService } from './travel-fair.service';
import { TravelFairs } from './Fair';
// import { AddFair } from './addFair';
import {NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-fares',
  templateUrl: './add-fares.component.html',
  styleUrls: ['./add-fares.component.css']
})
export class AddFaresComponent implements OnInit {
  travelFairs:TravelFairs = new TravelFairs();
  categories: any = [];
  constructor(private fairService:TravelFairService) { }

  ngOnInit(): void {
    this.getAllCategoies();
  }

  save(){
    if(this.travelFairs!=null){
        this.travelFairs.departureFrom = this.travelFairs.departureFrom.trim().toUpperCase();
        this.travelFairs.departureFrom = this.travelFairs.arrivalTo.trim().toUpperCase()
        this.fairService.saveFair(this.travelFairs).subscribe((res=>{
            console.log("Res",res);
            this.travelFairs = new TravelFairs();
        }))
    }
    else{
      
    }
  }

  getAllCategoies(){
    this.fairService.getAllCategories().subscribe((res=>{
      console.log(res);
      if(res){
        const {_embedded } = res;
        
        this.categories = _embedded.category;
        this.categories.forEach(element => {
            delete element['_links']
        });
        
        console.log(this.categories)
      }
    }))
  }

}
