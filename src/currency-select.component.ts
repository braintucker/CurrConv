import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeService } from './exchange.service';
@Component({
  selector: 'currency-select',
  template: `
    <select [ngModel]="selected" (ngModelChange)="onSelectedChange($event)">
      <option *ngFor="let currency of supportedCurrencies" [value] = "currency">
        {{currency}}
      </option>
    </select>
    ({{selected}})
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;
  @Output() selectedChange = new EventEmitter();


  supportedCurrencies = [];

  constructor(exchangeService: ExchangeService){
    this.supportedCurrencies = exchangeService.supportedCurrencies;
  }

  onSelectedChange(selected) {
    this.selected = selected;
    this.selectedChange.emit(selected);
  }
}
