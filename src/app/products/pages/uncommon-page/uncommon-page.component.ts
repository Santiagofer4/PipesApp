import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.scss']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando'
  public gender: 'male' | 'female' = 'male'
  public invitatioonMap = {
    'male': 'inivitarlo',
    'female':'invitarla'
  }


  changeClient():void {
    this.gender = 'female'
    this.name = 'Melissa'
  }

}
