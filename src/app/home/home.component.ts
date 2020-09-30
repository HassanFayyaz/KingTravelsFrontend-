import { TravelFairs } from './../admin/add-fares/Fair';
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

  fares = [];
  categoryArray = [];
  from: any;
  to: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private service: CategoryService,
    private fairService: TravelFairService) { }

  ngOnInit(): void {
    this.getAll();
  }




  getAll() {

    this.fairService.getAllTravelFaresAndCategory().subscribe(d => {

      if (d.status == 200) {
        //what i want 
        const { result } = d;
        console.log("THIS IS MY RESULT", result)
        result.map((element) => {
          //call the function here
          //then push 
          if (element != null) {
            const foundObj = this.fares.findIndex((obj) => {
              return obj.travelFairs.id == element.travelFairs.id
            })

            if (foundObj != -1) {
              //found object men se categories nkalo
              this.fares[foundObj].categories.push({
                price: element.price,
                name: element.travelFairsCategory.category,
                id: element.travelFairsCategory.id
              })
            }
            else {
              let obj = {
                active: '',
                id: '',
                travelFairs: '',
                categories: []
              }
              obj.active = element.active,
                obj.id = element.id;
              obj.travelFairs = element.travelFairs;
              obj.categories.push({
                price: element.price,
                name: element.travelFairsCategory.category,
                id: element.travelFairsCategory.id
              })

              this.fares.push(obj)
            }


          }
          console.log("=========================", this.fares)

        })

      }
      this.backUpArray = this.fares;


    })

  }

  found=false;
  backUpArray = []
  search() {
    
    this.found = true;
    if (this.from != null && this.to != null) {
      this.fares = this.fares.filter((value) => {
        return value.travelFairs.departureFrom.toUpperCase() == this.from.toUpperCase() && value.travelFairs.arrivalTo.toUpperCase() == this.to.toUpperCase()
      })
      if (!this.fares) {
        this.fares = this.backUpArray;
      }
    }
    if (this.from != null && this.to == null) {
      this.fares = this.fares.filter((value) => {
        return value.travelFairs.departureFrom.toUpperCase() == this.from.toUpperCase()
      })
      if (!this.fares) {
        this.fares = this.backUpArray;
      }
    }
    if (this.from == null && this.to != null) {
      this.fares = this.fares.filter((value) => {
        return value.travelFairs.arrivalTo.toUpperCase() == this.to.toUpperCase()
      })
      if (!this.fares) {
        this.fares = this.backUpArray;
      }
    }
    if(this.from==null && this.to==null){
      this.fares = this.backUpArray;
    }

    setTimeout(()=>{
      this.found = false;
    },2000)

  }


}
