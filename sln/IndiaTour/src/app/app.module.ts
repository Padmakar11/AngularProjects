import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TajmahalComponent } from './tajmahal/tajmahal.component';
import { AkshardhamComponent } from './akshardham/akshardham.component';
import { HimalayaComponent } from './himalaya/himalaya.component';
import { CalculatorComponent } from './calculator/calculator.component';

const approute:Routes=[
  {path:'tajmahal', component:TajmahalComponent},
  {path:'akshardham', component:AkshardhamComponent},
  {path:'Himalayas', component:HimalayaComponent},
  {path:'calculator',component:CalculatorComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TajmahalComponent,
    AkshardhamComponent,
    HimalayaComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(approute),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
