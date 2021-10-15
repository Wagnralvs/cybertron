import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {Router, RouterModule, Routes} from '@angular/router';

import { NgxMaskModule } from 'ngx-mask';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatasComponent } from './pages/categories/datas/datas.component';
import { DatasPropertyComponent } from './pages/categories/datas-property/datas-property.component';
import { HomeComponent } from './pages/categories/home/home.component';
import { ResultComponent } from './pages/categories/result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    DatasComponent,
    DatasPropertyComponent,
    HomeComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters:false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
