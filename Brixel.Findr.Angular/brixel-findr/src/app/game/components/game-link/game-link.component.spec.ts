import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameLinkComponent } from './game-link.component';

describe('GameLinkComponent', () => {
  let component: GameLinkComponent;
  let fixture: ComponentFixture<GameLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
