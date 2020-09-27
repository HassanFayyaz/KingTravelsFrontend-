import { NzCardModule } from 'ng-zorro-antd/card';
import { TravelFairService } from './travel-fair.service';
import { TravelFairs } from './Fair';
// import { AddFair } from './addFair';
import {FormControl, NgForm} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormArray } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';


@Component({
  selector: 'app-add-fares',
  templateUrl: './add-fares.component.html',
  styleUrls: ['./add-fares.component.css']
})
export class AddFaresComponent implements OnInit {
  travelFairs:TravelFairs = new TravelFairs();
  categories: any = [];
  
  constructor(private fairService:TravelFairService,private fb: FormBuilder,private message: NzMessageService) {
   
   }

  ngOnInit(): void {
    this.getAllCategoies();
  }

 

  travelFairsCategories=[]
  save(myForm){

    console.log(this.travelFairs)
    console.log(myForm)
    // this.fairService.saveFair(this.travelFairs).subscribe(res=>{

    //   this.message.success('Fairs Successfully saved successfully', {
    //     nzDuration: 3000
    //   });
    //   this.emptyFields();
      
    // })
  }

  emptyFields(){
    this.travelFairs.active=null;
    this.travelFairs.amount=null;
    this.travelFairs.arrivalDate="";
    this.travelFairs.arrivalTo="";
    this.travelFairs.departureDate="";
    this.travelFairs.departureFrom="";
    this.travelFairs.discount=null;
    this.travelFairs.price=null;
    
  }

  getAllCategoies(){
    this.fairService.getAllCategories().subscribe(d=>{
      console.log("RES",d)
      this.categories=d.result
    })

}
}
