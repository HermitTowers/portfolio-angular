import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';
import { NavSidebarModule } from './nav-sidebar/nav-sidebar.module';
import { HomeComponent } from './home/home.component';
import { GitPortfolioComponent } from './git-portfolio/git-portfolio.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioOverlayComponent } from './portfolioOverlay/portfolioOverlay.component';
import { MainContentService } from './services/mainContent.service';
import { GitReadMeService } from './services/getReadMeService';

@NgModule({
  imports:
  [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    NavSidebarModule,
    OverlayModule,
    HttpClientModule
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
  providers: [
    MainContentService,
    GitReadMeService
  ],
  bootstrap:
  [
    AppComponent
  ],
  entryComponents: [
    PortfolioOverlayComponent
  ]
})
export class AppModule { }
