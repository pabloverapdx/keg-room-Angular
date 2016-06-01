import { Component } from 'angular2/core';
import { Keg } from './keg.model';

 @Component ({
   selector: 'keg-display',
   inputs: ['keg'],
  template:`
  <div>
    <input *ngIf="keg.empty" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="!keg.empty" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ keg.nameOfBeer }}</label>
  </div>
  `
 })

export class KegComponent {
  public keg: Keg;
  toggleDone(setDate: boolean) {
  this.keg.done = setState
  }
}
