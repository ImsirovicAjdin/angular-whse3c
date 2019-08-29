import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ButtonsComponent } from './buttons/buttons.component';
import { CarouselsComponent } from './carousels/carousels.component';
import { DatepickersComponent } from './datepickers/datepickers.component';
import { DropdownsComponent } from './dropdowns/dropdowns.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, HelloComponent, 
    ButtonsComponent, CarouselsComponent, DatepickersComponent, DropdownsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
