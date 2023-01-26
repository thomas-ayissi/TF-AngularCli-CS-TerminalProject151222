import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LibrairieComponment',
  templateUrl: './LibrairieComponment.component.html',
  styleUrls: ['./LibrairieComponment.component.scss']
})
export class LibrairieComponent implements OnInit{
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
