import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurListComponent } from './couleur-list.component';

describe('CouleurListComponent', () => {
  let component: CouleurListComponent;
  let fixture: ComponentFixture<CouleurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
