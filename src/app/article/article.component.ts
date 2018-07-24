import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // the CSS class we want to apply to the 'host' of this component
  @HostBinding('attr.class') cssClass='row'; 
  // sum of all upvaotes (minus downvotes)
  votes: number;
  // article title:
  title: string;
  // article link:
  link: string;

  constructor() { 
    // setting some default attributes
    this.title = 'Angular 6.0.9 (angular-cli 6.0.8)';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp() {
    this.votes += 1;

    return false
    // *** ABOVE line added to PREVENT the browser from PROPAGATING events upwards!
    // achieved via returning a boolean value of FALSE from the click event handler !!!
  }

  voteDown() {
    this.votes -= 1;

    return false
  } 

  ngOnInit() {
  }

}
