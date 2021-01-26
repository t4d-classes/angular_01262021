import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurHomeComponent } from './couleur-home.component';

describe('CouleurHomeComponent', () => {
  let component: CouleurHomeComponent;
  let fixture: ComponentFixture<CouleurHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleurHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
