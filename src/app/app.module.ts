import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NavSidebarModule } from './nav-sidebar/nav-sidebar.module';
import { HomeComponent } from './home/home.component';
import { GitPortfolioComponent } from './git-portfolio/git-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioOverlayComponent } from './portfolioOverlay/portfolioOverlay.component';

@NgModule({
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NavSidebarModule,
    OverlayModule
  ],
  declarations:
  [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    GitPortfolioComponent,
    PortfolioOverlayComponent,
    AboutComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap:
  [
    AppComponent
  ],
  entryComponents: [
    PortfolioOverlayComponent
  ]
})
export class AppModule { }
