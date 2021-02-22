import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  User : any = [];
  constructor( public restApi: RestApiService) { }

  ngOnInit(): void {
    this.loadUserList()
  }
  // Get Users list
  loadUserList() {
    return this.restApi.getUserList().subscribe((data: {}) => {
      this.User = data;
    })
  }

}
