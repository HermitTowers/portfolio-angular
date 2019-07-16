import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOverlayComponent } from './portfolioOverlay.component';

describe('OverlayComponent', () => {
  let component: PortfolioOverlayComponent;
  let fixture: ComponentFixture<PortfolioOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
