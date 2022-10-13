import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { CardFormComponent } from './components/pages/card-form/card-form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NbaPageComponent } from './components/pages/nba-page/nba-page.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'nba', component: NbaPageComponent},
  { path: 'card', component: CardFormComponent},
  { path: 'moments/new', component: NewMomentComponent},
  { path: 'moments/edit/:id', component: EditMomentComponent },
  { path: 'moments/:id', component: MomentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
