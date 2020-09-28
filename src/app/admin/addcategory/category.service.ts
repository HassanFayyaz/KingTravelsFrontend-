import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { addcategory } from './addcategory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  private postCategoryURL= environment.controller_url+"/fairCategory"
  private getAllCategoryURL= environment.controller_url+"/categories"

  public saveCategory(obj:Object):Observable<any>{
    return this.http.post(this.postCategoryURL,obj);

  }

 

  
}
