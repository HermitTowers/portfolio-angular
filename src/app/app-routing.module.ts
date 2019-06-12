import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: 'projects',
        redirectTo: './projects'
        // loadChildren: './projects/projects.module#ProjectsModule',
    },
    {
        path: 'about',
        redirectTo: './about'
        // loadChildren: './about/about.module#AboutModule'
    },
    { path: '', redirectTo: './', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
