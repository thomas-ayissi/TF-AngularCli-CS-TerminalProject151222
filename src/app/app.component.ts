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


