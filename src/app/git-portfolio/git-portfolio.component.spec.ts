import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitPortfolioComponent } from './git-portfolio.component';

describe('GitPortfolioComponent', () => {
  let component: GitPortfolioComponent;
  let fixture: ComponentFixture<GitPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
