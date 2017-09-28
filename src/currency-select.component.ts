import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ExchangeService } from './exchange.service';
@Component({
  selector: 'currency-select',
  template: `
    <select [(ngModel)]="selected" >
      <option *ngFor="let currency of supportedCurrencies" [value] = "currency">
        {{currency}}
      </option>
    </select>
    <button (click)="onSetClick()">Set</button>
    ({{selected}})
  `
})
export class CurrencySelectComponent {

  @Input() selected: string;
  @Output() setClick = new EventEmitter();
  setClick = new EventEmitter();

  supportedCurrencies = [];

  constructor(exchangeService: ExchangeService){
    this.supportedCurrencies = exchangeService.supportedCurrencies;
  }

  onSetClick() {
    this.setClick.emit(this.selected);
  }
}
