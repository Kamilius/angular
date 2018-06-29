import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private http: Http) { }
  placeholder = {
    login: 'login',
    avatar_url: 'placeholder'
  }
  followers = []
  @Input () user;  

  update () {
    this.followers = [];
    this.getFollowers()
    .subscribe(
      resArray => {
        return this.followers = resArray;
      },
      err => console.log(err)
    )
  }

  getFollowers (): Observable<any> {
    return this.http.get(`https://api.github.com/users/${this.user ? this.user.login : 1}/followers`)
      .pipe(map((res: Response, i) => res.json()));
  }

  ngOnInit() {
    
  }

}
