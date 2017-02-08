import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Array<Article> = [];
 
  addArticle(title: HTMLInputElement, link: HTMLInputElement) {
      console.log(`Adding article title: ${title.value} and link: ${link.value}`);
      var article: Article = new Article(title.value, link.value);
      this.articles.push(article);
      title.value = '';
      link.value = '';
      return false;
  }

  sortArticles(): Array<Article> {
    return this.articles.sort( (a, b) => b.votes - a.votes);
  }
}
