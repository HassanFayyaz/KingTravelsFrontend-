import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import {FormsModule} from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { ReactiveFormsModule } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddFaresComponent } from './add-fares/add-fares.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewTravelFaresComponent } from './view-travel-fares/view-travel-fares.component';



@NgModule({
  declarations: [AdminlayoutComponent, AddFaresComponent, LoginPageComponent, ViewTravelFaresComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzPopconfirmModule,
    NgZorroAntdModule,
    NzAlertModule,
    FormsModule,
    NzInputModule,
    NzCardModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule,
    ReactiveFormsModule
    ],
    
})
export class AdminModule { }
