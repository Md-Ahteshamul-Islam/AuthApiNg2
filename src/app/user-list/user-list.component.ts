import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  User : any = [];
  constructor( 
      public restApi: RestApiService,
      public router: Router
    ) { }

  ngOnInit(): void {
    this.loadUserList()
  }
  // Get Users list
  loadUserList() {
    return this.restApi.getUserList().subscribe((data: {}) => {
      this.User = data;
    })
    // return this.restApi.getUserList();
  }
  // Get Users list
  deleteUser(id:any, name:any) {
    var _conf = confirm("Delete record for : "+ name + "?");
    
    if(_conf){
      this.restApi.deleteUser(id).subscribe((data: {}) => {
        if(data == true){
          this.loadUserList();
          alert("Deleted Successfully.");
        }
        else{
          alert("Something went wrong!!");
        }
      })
    }
  }

}
