import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableComponent } from './reusable/reusable.component';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { BlankPageRoutingModule } from '../blank/blank-routing.module';



@NgModule({
  declarations: [ReusableComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomePageRoutingModule
  ],
  exports: [
    ReusableComponent,
    HomePageRoutingModule,
    BlankPageRoutingModule
  ]
})
export class ComponentModule { }
