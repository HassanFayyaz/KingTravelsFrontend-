import { TravelFairService } from './../add-fares/travel-fair.service';
import { CategoryService } from './../addcategory/category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {

  categories=[];

  constructor(
    private message: NzMessageService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CategoryService,
    private fairService: TravelFairService
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  confirmDelete(){

  }
  cancel(){
    
  }

  getAllCategories(){
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
