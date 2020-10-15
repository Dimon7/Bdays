import {NoPreloading, Router, RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from './add-user/add-user.component';
import {NgModule} from '@angular/core';
import {UpcomingBdayComponent} from './upcoming-bday/upcoming-bday.component';
import {ManageBdayComponent} from './manage-bday/manage-bday.component';

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'upcoming-birthday', component: UpcomingBdayComponent },
  { path: 'manage-birthday', component: ManageBdayComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {}
}


