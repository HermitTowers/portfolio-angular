import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portfolio-overlay',
  templateUrl: './portfolioOverlay.component.html',
  styleUrls: ['./portfolioOverlay.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortfolioOverlayComponent {
    @Input() content: string;

    constructor() { }
}
