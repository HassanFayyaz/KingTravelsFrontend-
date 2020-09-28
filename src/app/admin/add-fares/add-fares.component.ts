import { ActivatedRoute, Router } from '@angular/router';
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
  travelFareId:any; 
  
  constructor(private fairService:TravelFairService,private fb: FormBuilder,private message: NzMessageService,private activatedRoute:ActivatedRoute,private router:Router) {
   
   }

  ngOnInit(): void {
    this.getEditFair();
    if(this.travelFareId==undefined){
      this.getAllCategoies();
    }
    
  }
 
  getEditFair(){
   this.travelFareId = this.activatedRoute.snapshot.params['id'];
   if(this.travelFareId!=undefined){
    this.fairService.editFair(this.travelFareId).subscribe(res=>{
      if(res.status==200){
       console.log("RES",res)
       this.travelFairs = res.result?res.result[0].travelFairs:null;
       this.travelFairs.active = res.active;
       
       res.result.map((el)=>{
          if(el.travelFairsCategory){
              const {travelFairsCategory} = el;
              const {price} = el;
              let obj = {
                category : travelFairsCategory.category,
                id : travelFairsCategory.id,
                price : price
              }
              this.categories.push(obj);
          }
       })
       
 
     }
 })
   }
  
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
         id : foundObj.id,
         price : price 
        }
        this.travelFairsCategories.push(makeObject);   
       }
      });
    }
    this.travelFairDto.travelFairsCategories = this.travelFairsCategories;
    console.log(this.travelFairDto)
    this.travelFairDto.id = this.travelFareId
    this.fairService.saveFair(this.travelFairDto).subscribe(res=>{
        if(res){
          this.message.success('Fair Added Successfully');
          this.emptyFields();
          // this.myFrom.reset();
          this.router.navigate(['admin/viewfares'])
          
        }
    }),error=>{
      this.message.error('Failed')
    }
    
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
