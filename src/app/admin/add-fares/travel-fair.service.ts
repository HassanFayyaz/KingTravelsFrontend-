import { environment } from './../../../environments/environment';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelFairService {

  controller_url = environment.controller_url;
  repo_url = environment.repo_url;
  constructor(private http:HttpClient) { }

  saveFair(object:any):Observable<any>{
    return this.http.post(this.controller_url+"fair",object);
  }
  getAllFair():Observable<any>{
    return this.http.get(this.repo_url+"fair");
  }

  public getAllFares():Observable<any>{
    return this.http.get(this.controller_url+"fair")
  }

  saveTravelCategory(object:any){
    return this.http.post(this.controller_url+"fairCategory",object);

  }
  getAllCategories():Observable<any>{
    return this.http.get(this.controller_url+"categories");
  }

  public getAllTravelFaresAndCategory():Observable<any>{
    return this.http.get(this.controller_url+"/get")
  }


}
