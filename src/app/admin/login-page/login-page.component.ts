import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  submit(form){
    console.log(form)
      if(form!=null){
          let email = form['email'].toLowerCase();
          let password = form['password'].toLowerCase()
          if(password=="admin" && email=="admin"){
              this.router.navigate(['admin'])
          }
      }
      else{

      }
  }

}
