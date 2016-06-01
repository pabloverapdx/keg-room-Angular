import { Component } from 'angular2/core';


@Component({
  selector: 'beerApp',
  template: `
    <div class="container">
      <h1>Beer App!</h1>
    </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  constructor (){
    this.kegs = [
      new Keg("Black Beer", 0),
      new Keg("Boneyard", 1),
      new Keg("Ninkasi", 2),
      new Keg("Deschutes", 3),
      new Keg("Double Mountain", 4)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log(clickedKeg, 'parent');
  }
}
