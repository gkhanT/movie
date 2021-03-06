import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './details/details.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { TrendingComponent } from './trending/trending.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'topRated', component: TopRatedComponent },
  { path: 'trending', component: TrendingComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PopularComponent,
    TopRatedComponent,
    TrendingComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
