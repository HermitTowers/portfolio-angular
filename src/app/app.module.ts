import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { NavSidebarModule } from './nav-sidebar/nav-sidebar.module';
import { HomeComponent } from './home/home.component';
import { GitPortfolioComponent } from './git-portfolio/git-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NavSidebarModule
  ],
  declarations:
  [
    AppComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    AboutComponent,
    HomeComponent,
    GitPortfolioComponent,
    ContactMeComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap:
  [
    AppComponent
  ]
})
export class AppModule { }
