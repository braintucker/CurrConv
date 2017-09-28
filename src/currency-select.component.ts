import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected" >
      <option *ngFor="let currency of supportedCurrencies" [value] = "currency">
        {{currency}}
      </option>
    </select>
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;

  supportedCurrencies = ['EUR', 'GBP', 'USD'];

}
