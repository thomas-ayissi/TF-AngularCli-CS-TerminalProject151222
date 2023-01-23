import { Component } from '@angular/core';

@Component({
  selector: 'app-BoutonMenu',
  templateUrl: './BoutonMenu.component.html',
  styleUrls: ['./BoutonMenu.component.scss']
})
export class BoutonMenuComponent {
  category!: string;
  name!: string;
  class!: string;
  color!:string;

  ngOnInit(){
    this.category= 'Header';
    this.name= 'Home';
    this.class= 'Bruce Wayne';
    this.color= 'blue';

  }
}
