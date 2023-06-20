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


  changeClient(): void {
    this.gender = 'female'
    this.name = 'Melissa'
  }

  // i18nPlural
  public clients: string[] = ['Maria','Pedro','Fernando','Hernando', 'Eduardo', 'Melissa','Natalia']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': ' tenemos un cliente esperando.',
    '=2': ' tenemos 2 clientes esperando.',
    'other': ' tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift()
  }

  // KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Ottawa, Canada'
  }
 
}
