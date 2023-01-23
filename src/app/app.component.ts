import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
category!: string;
title!: string;
isbn_number!: string;
publication_date!: Date;
author!: string;
resume!: string;
image_url!:string;
}

//ToDo
//Inclure :
// (1)HeaderComponment
// (2)MainContentComponment
// (3)SideBarComponment
// (4) Ainsi que tous les autres "components décrits" dans le schéma inclus dans le porjet
