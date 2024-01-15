import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  { path: '', component: WelcomeComponent },
    { path: 'result', component: ResultComponent },
    { path: 'flight-result', component: FlightSearchComponent },
    { path: 'user', component: UserComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
