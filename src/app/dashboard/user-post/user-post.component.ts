import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from "rxjs/Subscription";

import { DashboardService } from '../dashboard.service';
import { UserPost } from '../user-post';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  paramSubscription: Subscription;

  posts: UserPost[] = [];

  constructor(private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.dashboardService.getPosts(userId).subscribe(posts => {
        this.posts = posts;
      });
    });
  }

  ngOnDestroy() {
    this.paramSubscription.unsubscribe();
  }

}
