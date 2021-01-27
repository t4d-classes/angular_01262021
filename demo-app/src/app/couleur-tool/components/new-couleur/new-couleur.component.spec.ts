import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCouleurComponent } from './new-couleur.component';

describe('NewCouleurComponent', () => {
  let component: NewCouleurComponent;
  let fixture: ComponentFixture<NewCouleurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCouleurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCouleurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
