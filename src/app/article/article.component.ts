import { Component, OnInit, Input } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  host: {
      class: 'row'
  }
})
export class ArticleComponent implements OnInit {
  @Input() article: Article

  upVote() {
    this.article.upVote();
    return false
  }
  
  downVote() {
    this.article.downVote();
    return false
  }
  ngOnInit() {
  }

}
