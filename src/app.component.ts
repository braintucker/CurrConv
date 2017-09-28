import { Component } from '@angular/core';

@Component({
  selector: 'currency-converter',
  template: `
    <input type="number" [(ngModel)]="baseAmount"
      [class.error] = "isInvalid(baseAmount)" > USD
    = <strong>{{getTargetAmount()}}</strong> GBP
  `,
  styles: [`
    input[type=number] {
      width: 10ex;
      text-align: right;
    }
    .error{
      background-color: #ff6666;
    }
  `]
})

export class AppComponent {

  exchangeRate = 0.70;
  baseAmount = 1;
  targetAmount = this.exchangeRate;

  getTargetAmount() {
    console.info('baseAmount valid:',Number.isFinite(this.baseAmount));
    return this.baseAmount * this.exchangeRate;
  }

  isInvalid(value) {
    return !Number.isFinite(this.baseAmount);
  }
}
