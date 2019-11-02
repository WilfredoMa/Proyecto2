import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieXComponent } from './movie-x/movie-x.component';
import { ReserveComponent } from './reserve/reserve.component';


const routes: Routes = [
  {path:"", component: MoviesComponent},
  {path:'movieX/:Id', component: MovieXComponent},
  {path:'reserve', component: ReserveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
