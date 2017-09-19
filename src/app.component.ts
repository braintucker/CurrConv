import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [value]="baseAmount" #baseAmountField> USD =
    <strong>{{targetAmount}}</strong> GBP
    <button (click)="update(baseAmountField.value)">Update</button>
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
  `]
})

export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;
  targetAmount = this.exchangeRate;

update(baseAmount){  
  this.targetAmount = parseFloat(baseAmount) * this.exchangeRate;
  }
}
