import { Component, OnInit } from '@angular/core';
import { JokeService } from './joke.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-joke',
  template: `
    <h1>{{title}}</h1>
    <div class="well">
      <p>{{joke | async}}</p>
      <button class="btn btn-success" (click)="getJoke()">Get next joke</button>
    </div>
  `,
})
export class JokeComponent implements OnInit {
  joke: Observable<string>;
  title = 'Chuck Norris Jokes';

  constructor(private jokeService: JokeService) { }

  ngOnInit() {
    this.getJoke();
  }

  getJoke() {
    this.joke = this.jokeService.getJoke();
  }

}
