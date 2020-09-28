import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { TravelFairService } from './../add-fares/travel-fair.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-travel-fares',
  templateUrl: './view-travel-fares.component.html',
  styleUrls: ['./view-travel-fares.component.css']
})
export class ViewTravelFaresComponent implements OnInit {

  faresArray:any=[];
  constructor(private fairService:TravelFairService,private message: NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.getAllFares();
  }

  confirmDelete(){

  }
  cancel(){
    
  }
  goToAddFares(){
    this.router.navigate(['admin/addfares'])
  }
  getAllFares(){
    this.fairService.getAllFares().subscribe(res=>{
      console.log(res)
      if(res.status==200){
      this.faresArray=res.result;
      this.message.success('Fares successfully Get', {
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
