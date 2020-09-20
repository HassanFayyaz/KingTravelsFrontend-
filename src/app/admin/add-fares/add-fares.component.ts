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
  fg: FormGroup;
  fa: FormArray;
  selected = 0;
  
  constructor(private fairService:TravelFairService,private fb: FormBuilder,private message: NzMessageService) {
    this.fg = this.fb.group({
      inputs: this.fb.array([])
    });
   }

  ngOnInit(): void {
    this.getAllCategoies();
  }

  addControlsInFormArray() {
    if (this.fa) {
      while (this.fa.length !== 0) {
        this.fa.removeAt(0);
      }
    }
    for (var i = 0; i < this.selected; i++) {
      this.fa = this.fg.get("inputs") as FormArray;
      this.fa.push(this.createItem());
    }
    console.log(this.selected)

    console.log("HASSAN")
  }

  createItem(): FormGroup {
    return this.fb.group({
      question: new FormControl("")
    });
  }



  save(){
    
    this.travelFairs.departureFrom="";
    this.travelFairs.arrivalTo="";
    this.travelFairs.departureDate="";
    this.travelFairs.arrivalDate="";
    this.travelFairs.amount=null;
    this.travelFairs.discount=null;
    this.travelFairs.active=null;
    this.selected=null;
    this.message.success("Saved Sucessfully", { nzDuration: 3000 })
    // if(this.travelFairs!=null){
    //     this.travelFairs.departureFrom = this.travelFairs.departureFrom.trim().toUpperCase();
    //     this.travelFairs.departureFrom = this.travelFairs.arrivalTo.trim().toUpperCase()
       
    //     this.fairService.saveFair(this.travelFairs).subscribe((res=>{

    //         console.log("Res",res);
    //         this.travelFairs = new TravelFairs();
    //     }))
    // }
    // else{
      
    // }


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
