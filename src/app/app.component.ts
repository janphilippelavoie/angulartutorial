import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
      console.log(`Adding article title: ${title.value} and link: ${link.value}`)
  }
}
