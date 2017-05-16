import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { environment } from '../../environments/environment';
import { UserModel } from './user-model';
import { UserPost } from './user-post';

@Injectable()
export class DashboardService {

  users: UserModel[] = [];
  posts: UserPost[] = [];

  constructor(private http: Http) { }

  fetchUserData(): Observable<UserModel[]> {
    const url = `https://jsonplaceholder.typicode.com/users`;
    if (this.users.length > 0) {
      return Observable.of(this.users);
    } else {
      return this.http.get(url).map(res => {
        this.users = res.json();
        return this.users;
      });
    }
  }

  getUserName(id: number): Observable<string> {
    if(this.users.length === 0) {
      return this.fetchUserData().map((data) => {
        const user = this.users.find(user => user.id === id);
        return user.name;
      });
    } else {
      const user = this.users.find(user => user.id === id);
      return Observable.of(user.name);
    }
  }

  getPosts(userId: number): Observable<UserPost[]> {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
    if (this.posts.length > 0 && this.posts[0].userId === userId) {
      return Observable.of(this.posts);
    } else {
      return this.http.get(url).map(res => {
        this.posts = res.json();
        return this.posts;
      });
    }
  }
}
