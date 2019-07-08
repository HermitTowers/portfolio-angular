import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NavSidebarComponent } from './nav-sidebar.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule
    ],
    declarations: [
        NavSidebarComponent
    ],
    exports:
    [
        NavSidebarComponent
    ]
}) export class NavSidebarModule { }
