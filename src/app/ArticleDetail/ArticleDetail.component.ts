import { Component } from '@angular/core';

@Component({
  selector: 'app-ArticleDetail',
  templateUrl: './ArticleDetail.component.html',
  styleUrls: ['./ArticleDetail.component.scss']
})
export class ArticleDetailComponent {
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
    this.image_url= "src/assets/imagesFolder/Livre_barack_obama_une_terre_promise.jpeg";

  }

  /*ngOnInit(){
    this.category= 'Thriller';
    this.title= 'An incredible story';
    this.isbn_number= '123 456 789 101';
    this.publication_date= new Date();
    this.author= 'Bruce Wayne';
    this.resume= 'Amazing book with an interessting story';
    this.image_url= "src/assets/imagesFolder/Livre_barack_obama_une_terre_promise.jpeg";

  }*/

}


