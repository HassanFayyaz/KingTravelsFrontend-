import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { OfferComponent } from './offer/offer.component';
import { ElementsComponent } from './elements/elements.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'about', component: AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'news',component:NewsComponent},
  {path: 'offer',component:OfferComponent},
  {path:'element',component:ElementsComponent},
  {path:'error',component:ErrorComponent},
  {path:'admin',loadChildren: () => import('../app/admin/admin.module').then(m => m.AdminModule)}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
