import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AddFaresComponent } from './add-fares/add-fares.component';

const routes: Routes = [
  {path:'',component: AdminlayoutComponent, children : [
    {path:'addfares',component:AddFaresComponent}
  ]}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
