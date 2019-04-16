import { Component, OnInit } from '@angular/core';
import { PostsService } from './shared/services/posts.service';
import { UsersService } from './shared/services/users.service';
import { isNullOrUndefined } from 'util';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	posts: [];
	users: [];

	constructor(
	  private postsServise: PostsService,
    private usersServise: UsersService
    ) { }

	async ngOnInit() {
		try {
			const posts = this.postsServise.getData();
			const users = this.usersServise.getData();
			this.posts = (isNullOrUndefined(await posts)) ? [] : await posts;
			this.users = (isNullOrUndefined(await users)) ? [] : await users;
      for (const user of this.users) {
			  let posts = 0;
        for (const post of this.posts) {
			    if (post.userId === user.id) {
			      posts++;
			      user['posts'] = posts;
          }
        }

      }
		} catch (err) {
			console.log(err);
		}
	}
}
