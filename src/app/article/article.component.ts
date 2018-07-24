import { 
  Component, 
  OnInit, 
  Input,
  HostBinding } from '@angular/core';

import { Article } from './article.model'; 

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  // the CSS class we want to apply to the 'host' of this component
  @HostBinding('attr.class') cssClass='row'; 
  // 
  @Input() article: Article;

  constructor() { 
    // empty, as article is populated via the Input now
  }

  voteUp() {
    // increment votes... 
    /*GOOD practice - called via the Model's own method */  
    this.article.voteUp();
    return false
    // *** ABOVE line added to PREVENT the browser from PROPAGATING events upwards!
    // achieved via returning a boolean value of FALSE from the click event handler !!!
  }

  voteDown() {
    // decrement votes...
    this.article.voteDown();
    return false
  } 

  ngOnInit() {
  }

}
