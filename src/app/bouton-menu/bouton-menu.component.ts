import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bouton-menu',
  templateUrl: './bouton-menu.component.html',
  styleUrls: ['./bouton-menu.component.scss']
})
export class BoutonMenuComponent implements OnInit{
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
