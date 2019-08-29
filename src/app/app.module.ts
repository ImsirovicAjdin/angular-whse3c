import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { DatepickersComponent } from './datepickers/datepickers.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ButtonsModule.forRoot(), 
    CarouselModule.forRoot(),     
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot()    
  ],
  declarations: [ 
    AppComponent, HelloComponent, 
    ButtonsComponent, CarouselsComponent, DatepickersComponent, DropdownsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
