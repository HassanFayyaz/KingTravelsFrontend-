import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ViewTravelFaresComponent } from './view-travel-fares/view-travel-fares.component';
import { ErrorPageComponent } from './../error-page/error-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AddFaresComponent } from './add-fares/add-fares.component';

const routes: Routes = [
  {path:'',component: AdminlayoutComponent, children : [

    {path:'',component:ViewTravelFaresComponent},
    {path:'addfares/:id',component:AddFaresComponent},
    {path:'addfares',component:AddFaresComponent},
    {path:'viewfares',component:ViewTravelFaresComponent},
    {path:'addcategory',component:AddcategoryComponent},
    {path:'viewcategory',component:ViewcategoryComponent}
    
    

  ]},
  {path:'**',component:ErrorPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
