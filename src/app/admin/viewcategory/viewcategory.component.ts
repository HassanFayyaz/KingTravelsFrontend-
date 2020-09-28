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

  goToAddCategory(){
    this.router.navigate(['admin/addcategory'])
  }

  getAllCategories(){
    this.fairService.getAllCategories().subscribe(res=>{
     console.log(res)
     if(res.status==200){
       this.categories=res.result;
       this.message.success('Categories successfully Get', {
        nzDuration: 3000
      });
     }
     else{
      this.message.loading('Error', {
        nzDuration: 3000
      });
     }
  
  })
}


}
