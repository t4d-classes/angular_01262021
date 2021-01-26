import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouleurFormComponent } from './couleur-form.component';

describe('CouleurFormComponent', () => {
  let component: CouleurFormComponent;
  let fixture: ComponentFixture<CouleurFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CouleurFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CouleurFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
