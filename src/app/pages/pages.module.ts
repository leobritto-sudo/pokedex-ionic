import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// Routing Module
import { PageRoutingModule } from './pages-routing.module';

// Modules
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageRoutingModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    DetailsComponent
  ]
})
export class PageModule {}
