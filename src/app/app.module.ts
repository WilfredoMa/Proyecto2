import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { ImagesComponent } from './images/images.component';
import { BarComponent } from './bar/bar.component';
import { MovieXComponent } from './movie-x/movie-x.component';
import { ReserveComponent } from './reserve/reserve.component';
import { MoviesPipe } from './moviesOn.pipe';
import { MoviesOffPipe } from './movies-off.pipe';
import { FilterPipe } from './filter.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment.prod';
import { AdminComponent } from './admin/admin.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    ImagesComponent,
    BarComponent,
    MovieXComponent,
    ReserveComponent,
    MoviesPipe,
    MoviesOffPipe,
    FilterPipe,
    AdminComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
