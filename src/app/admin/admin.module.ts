import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NgZorroAntdModule } from 'ng-zorro-antd';


import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddFaresComponent } from './add-fares/add-fares.component';



@NgModule({
  declarations: [AdminlayoutComponent, AddFaresComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NgZorroAntdModule,
    NzInputModule,
    NzCardModule,
    NzSelectModule,
    NzRadioModule,
    NzButtonModule
    ],
    
})
export class AdminModule { }
