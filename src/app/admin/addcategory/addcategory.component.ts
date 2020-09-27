import { CategoryService } from './category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { addcategory } from './addcategory';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  constructor(
    private message: NzMessageService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CategoryService
  ) { }

  categoryObj: addcategory = new addcategory()

  ngOnInit(): void {
  }

  saveCategory(){
    this.service.saveCategory(this.categoryObj).subscribe(res=>{
      this.message.success('Category Successfully saved successfully', {
        nzDuration: 3000
      });
      this.categoryObj.category = "";
  
    })
  }



}
