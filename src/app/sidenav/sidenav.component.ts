import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  userId: string;
  userName: string;
  user = new User('', '', '', '', '', '');
  showPhoto: boolean;
  userCreated: boolean;

  constructor(private api: APIService, private router: Router) { }

  ngOnInit() {
    this.showPhoto = false;
    Auth.currentAuthenticatedUser({
        bypassCache: false
      }).then(async user => {
        this.userName = user.username;
        this.userId = user.attributes.sub;
        let result = await this.api.GetUser(this.userId);
        if (!result) {
          this.userCreated = false;
          this.user = new User('', '', '', '', '', '');
        } else {
          this.userCreated = true;
          this.showPhoto = !!result.image;
          this.user = new User(
            this.userId,
            result.username,
            result.firstName,
            result.lastName,
            result.bio,
            result.image
          )
        }
      })
      .catch(err => console.log(err));
  }

  logOut() {
    Auth.signOut({ global: true })
    .then(data => {
      this.router.navigate(['/auth']);
    })
    .catch(err => console.log(err));
  }

}
