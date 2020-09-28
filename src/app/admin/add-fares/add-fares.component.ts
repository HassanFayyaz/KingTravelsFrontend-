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

 


  save(){
    

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
