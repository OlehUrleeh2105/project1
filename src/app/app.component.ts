import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  search = '';
  searchField = 'title';

  posts: Post[] = [
    { title: 'Beer', text: 'The best' },
    { title: 'Bread', text: 'The best 2' },
    { title: 'JS', text: 'The best 3' },
  ];
}
