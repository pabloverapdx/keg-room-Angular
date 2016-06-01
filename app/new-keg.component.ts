import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="keg-form">
    <h3>Tap Keg:</h3>
    <input placeholder="Name of beer" class="col-sm-8 input-lg" #newNameOfBeer>
    <input placeholder="Brand of Beer" class="col-sm-8 input-lg" #newBrand>
    <input placeholder="Price of Beer" class="col-sm-8 input-lg" #newPrice>
    <input placeholder="Alcohol Content" class="col-sm-8 input-lg" #newAlcoholContent>
    <button (click)="addKeg(newNameOfBeer)" class="btn-success btn-lg add-button">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<String>;
  constructor(){
    this.onSubmitNewKeg = new EventEmitter();
  }
  addKeg(userNameOfBeer: HTMLUInputElement){
    this.onSubmitNewKeg.emit(userNameOfBeer.value);
    userNameOfBeer.value = "";
    }
  }
