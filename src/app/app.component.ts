import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [slideInAnimation]
})
export class AppComponent {
    getAnimationData(outlet: RouterOutlet) {
        return (
            outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
        );
    }

    public openNav() {
      document.getElementById("mySidebar").style.width = "60%";
      document.getElementById("mySidebar").style.display = "block";
    }

    public closeNav() {
      document.getElementById("mySidebar").style.display = "none";
    }
}
