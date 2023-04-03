import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleModuleRoutingModule } from './simple-module-routing.module';
import { SimplePageComponent } from './simple-page/simple-page.component';


@NgModule({
  declarations: [
    SimplePageComponent
  ],
  imports: [
    CommonModule,
    SimpleModuleRoutingModule
  ]
})
export class SimpleModuleModule { }
