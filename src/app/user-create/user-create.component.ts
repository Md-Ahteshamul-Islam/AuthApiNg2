import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  @Input() user = {id : 0, UserName: '', FullName: '', Mobile: '', email:'', IsActive:true, Password:'' }
  id = this.actRoute.snapshot.params['id'];
  IsEdit = false;
   UserData: any = {};
  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute, 
    public router: Router
  ) { }

  ngOnInit() {
    if(this.id != null){
      // alert("Id is : " + this.id);
      this.restApi.getUser(this.id).subscribe((data: {}) => {
        this.UserData = data;

        this.user.id = this.UserData.id;
        this.user.UserName = this.UserData.UserName;
        this.user.FullName = this.UserData.FullName;
        this.user.Mobile = this.UserData.Mobile;
        this.user.email = this.UserData.email;
        this.user.IsActive = this.UserData.IsActive;
        this.user.Password = this.UserData.Password;

        this.IsEdit = true;
      })
    }
  }
  addUser() {
    this.restApi.createUser(this.user).subscribe((data: {}) => {
      this.router.navigate(['/UserList'])
    })
  }
  updateUser() {
    this.restApi.updateUser(this.user).subscribe((data: {}) => {
      if(data == true){
        alert("Updated Successfully");
      }
      else{
        alert("Something went wrong!!");
      }
    })
  }

}
