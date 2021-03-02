import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'UserList', component: UserListComponent },
  { path: 'UserCreate', component: UserCreateComponent },
  { path: 'UserEdit/:id', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
