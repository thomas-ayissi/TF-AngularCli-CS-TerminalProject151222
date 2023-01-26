import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fiche-article',
  templateUrl: './fiche-article.component.html',
  styleUrls: ['./fiche-article.component.scss']
})
export class FicheArticleComponent implements OnInit{
   category!: string;
   title!: string;
   isbn_number!: string;
   publication_date!: Date;
   author!: string;
   resume!: string;
   image_url!:string;

   ngOnInit(){
    this.category= 'Thriller';
    this.title= 'An incredible story';
    this.isbn_number= '123 456 789 101';
    this.publication_date= new Date();
    this.author= 'Bruce Wayne';
    this.resume= 'Amazing book with an interessting story';
    this.image_url= "./assets/imagesFolder/Livre_barack_obama_une_terre_promise.jpeg";
  }

}


