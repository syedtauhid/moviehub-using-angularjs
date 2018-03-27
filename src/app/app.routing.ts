import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GenresDetailsComponent } from "./genres-details/genres-details.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieListByGenresResolve } from './_resolve/index';

const routes: Routes = [
  {
    path: "movies",
    component: HomeComponent,
    resolve: { moviesByGenres: MovieListByGenresResolve  }
  },
  {
    path: "genre/:id",
    component: GenresDetailsComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
  },

  { path: '**', redirectTo: 'movies' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    MovieListByGenresResolve,
  ]
})

export class AppRoutingModule {}
