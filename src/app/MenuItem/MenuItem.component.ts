import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-MenuItem',
  templateUrl: './MenuItem.component.html',
  styleUrls: ['./MenuItem.component.scss']
})
export class MenuItemComponent implements OnInit{
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
