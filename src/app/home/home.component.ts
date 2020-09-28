import { TravelFairService } from './../admin/add-fares/travel-fair.service';
import { CategoryService } from './../admin/addcategory/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(  
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CategoryService,
    private fairService: TravelFairService) { }

  ngOnInit(): void {
    this.getAllFaresCategories();
  }

  faresCategoryArray:any=[];

  getAllFaresCategories(){
   this.fairService.getAllTravelFaresAndCategory().subscribe(d=>{
     console.log(d);
   })
  }

}
