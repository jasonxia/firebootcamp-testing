import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class JokeService {

  constructor(private http: Http) { }

  getJoke() {
    return this.http.get(`http://api.icndb.com/jokes/random`)
      .do(x => console.log(x))
      .map(response => response.json().value.joke);
  }

}
