import { Component, OnInit, HostBinding } from '@angular/core';

import { Article } from './article.model'; 

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // the CSS class we want to apply to the 'host' of this component
  @HostBinding('attr.class') cssClass='row'; 
  // instance of the 'Article model'
  article: Article;

  constructor() { 
    // Using an instance of the 'Article model' to get independent data:
    this.article = new Article(
      'Angular 6.0.9',
      'http://angular.io',
      10);
  }

  voteUp() {
    this.article.votes += 1;

    return false
    // *** ABOVE line added to PREVENT the browser from PROPAGATING events upwards!
    // achieved via returning a boolean value of FALSE from the click event handler !!!
  }

  voteDown() {
    this.article.votes -= 1;

    return false
  } 

  ngOnInit() {
  }

}
