import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'santiago'
  public nameUpper: string = 'SANTIAGO'
  public fullName:  string = 'SanTIaGo ferNanDEz'

  public customDate: Date = new Date()

}
