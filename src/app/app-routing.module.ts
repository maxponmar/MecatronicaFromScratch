import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import {HomeComponent} from './components/home/home.component';
import {SectionComponent} from './components/section/section.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: ':category', component: SectionComponent },
  { path: ':category/:article', component: ArticleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
