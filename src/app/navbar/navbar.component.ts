import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  routeName = "home"
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
      if(this.activatedRoute.snapshot.routeConfig.path!="" && this.activatedRoute.snapshot.routeConfig.path!=null){
        this.routeName = this.activatedRoute.snapshot.routeConfig.path;
      }
      else{
        this.routeName = "home"
      }
  }

}
