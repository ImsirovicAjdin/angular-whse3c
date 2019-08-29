import { Component } from '@angular/core';

@Component({
  selector: 'my-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  checkModel: any = { left: false, middle: true, right: false };
  singleModel = '1';
}