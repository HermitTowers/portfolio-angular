import { Component, ViewChild, ElementRef, ApplicationRef, Injector, ComponentFactoryResolver } from '@angular/core';
import { ComponentPortal, DomPortalHost } from '@angular/cdk/portal';

import { PortfolioOverlayComponent } from '../portfolioOverlay/portfolioOverlay.component';
import { GitReadMeService } from '../services/getReadMeService';
import { GitReadMe } from '../models/gitReadMe';

@Component({
  selector: 'app-git-portfolio',
  templateUrl: './git-portfolio.component.html',
  styleUrls: ['./git-portfolio.component.scss']
})
export class GitPortfolioComponent {
     @ViewChild('portfolio_angular') gitPortfoloEleRef: ElementRef;
     @ViewChild('git_magic_engine') gitMagicEngineEleRef: ElementRef;
     @ViewChild('git_bookshelf') gitBookshelfEleRef: ElementRef;

    public gitPortfolioPortalHost: DomPortalHost;
    public gitMagicEnginePanelHost: DomPortalHost;
    public gitBookshelfPanelHost: DomPortalHost;

    public readMe = GitReadMe.empty();

    constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private injector: Injector,
                private appRef: ApplicationRef,
                private gitReadMeService: GitReadMeService) { }

    ngAfterViewInit() {
        this.gitPortfolioPortalHost = this.getPortalHost(this.gitPortfoloEleRef);
        this.gitMagicEnginePanelHost = this.getPortalHost(this.gitMagicEngineEleRef);
        this.gitBookshelfPanelHost = this.getPortalHost(this.gitBookshelfEleRef);
    }

    public onMouseEnter(elementRef: string) {
        switch (elementRef) {
            case 'portfolio_angular':
                this.getReadMeText('portfolio_angular');
                this.toggleMouseEnter(this.gitPortfolioPortalHost, this.readMe.content);
                break;
            case 'git_magic_engine':
                this.toggleMouseEnter(this.gitMagicEnginePanelHost,
                                    'code on a project to help generate rules for magic based on the RPG GURPS');
                break;
            case 'git_bookshelf':
                this.toggleMouseEnter(this.gitBookshelfPanelHost,
                                    'code on a project to save a library of books using Google Books');
                break;
        }
    }

    public onMouseLeave(elementRef: string) {
        switch (elementRef) {
            case 'portfolio_angular':
                this.toggleMouseLeave(this.gitPortfolioPortalHost);
                break;
            case 'git_magic_engine':
                this.toggleMouseLeave(this.gitMagicEnginePanelHost);
                break;
            case 'git_bookshelf':
                this.toggleMouseLeave(this.gitBookshelfPanelHost);
                break;
        }
    }

    private getReadMeText(repName: string) {
        this.gitReadMeService.get(repName).subscribe(response => {
            this.readMe = response;
        });
    }

    private toggleMouseEnter(portalHost: DomPortalHost, content: string) {
        const componentRef = portalHost.attach(new ComponentPortal(PortfolioOverlayComponent));
        componentRef.instance.content = content;
    }

    private toggleMouseLeave(portalHost: DomPortalHost) {
        portalHost.detach();
    }

    private getPortalHost(elementRef: ElementRef): DomPortalHost {
        return new DomPortalHost(
            elementRef.nativeElement,
            this.componentFactoryResolver,
            this.appRef,
            this.injector
        );
    }
}
