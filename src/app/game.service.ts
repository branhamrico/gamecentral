import { Injectable } from '@angular/core';
import { Http, Response }    from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class GameService {
  api = 'http://playngo.com/api/Games';

  constructor(private http: Http) {}

  ngOnInit() {
  }

  getGames() {
    return this.http.get(this.api).map((res:Response) => res.json());
  }
}
