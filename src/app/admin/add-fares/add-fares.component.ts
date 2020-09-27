import { NzCardModule } from 'ng-zorro-antd/card';
import { TravelFairService } from './travel-fair.service';
import { TravelFairs } from './Fair';
// import { AddFair } from './addFair';
import {FormControl, NgForm} from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('myFrom') myFrom:NgForm;
  
  constructor(private fairService:TravelFairService,private fb: FormBuilder,private message: NzMessageService) {
   
   }

  ngOnInit(): void {
    this.getAllCategoies();
  }

 

  travelFairDto :any={}
  travelFairsCategories=[]
  save(myForm){
    console.log(this.travelFairs)
    this.travelFairDto = this.travelFairs;
    this.travelFairDto.travelFairsCategories = this.travelFairsCategories;
    console.log(myForm);
    const keys = Object.keys(myForm);
    let  cateogryId = 0;
    let makeObject = {}
    if (keys.length > 0) {
      keys.map((everyKey) => {

        cateogryId = parseInt(everyKey.split('-')[0]);
       let foundObj = this.categories.find(category=>category.id==cateogryId);

       if(foundObj!=undefined){
        let price = myForm[everyKey];
        makeObject = {};
         makeObject = {
         travelFairsCategories : foundObj,
         price : price 
        }
        this.travelFairsCategories.push(makeObject);   
       }
      });
    }
    this.travelFairDto.travelFairsCategories = this.travelFairsCategories;
    this.fairService.saveFair(this.travelFairDto).subscribe(res=>{
        if(res){
          this.message.success('Fair Added Successfully');
          this.emptyFields();
          this.myFrom.resetForm();
          
        }
    })
    
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
