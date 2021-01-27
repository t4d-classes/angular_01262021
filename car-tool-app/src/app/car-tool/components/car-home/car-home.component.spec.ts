import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ICar, INewCar } from '../../models/ICar';
import { CarsService } from '../../services/cars.service';
import { CarHomeComponent } from './car-home.component';

const createFakeCarsService = () => {

  const cars: ICar[] = [
    { id: 1, make: 'test', model: 'test', year: 2017, color: 'green', price: 10000 },
    { id: 2, make: 'test', model: 'test', year: 2018, color: 'green', price: 20000 },
  ];

  const fakeCarsService = {
    _cars: cars,
    all() {
      return of(this._cars);
    },
    one(carId: number) {
      return of(this._cars.find(c => c.id === carId));
    },
    append(car: INewCar) {
      return of(this._cars = this._cars.concat({
        ...car, id: Math.max(...cars.map(c => c.id), 0) + 1,
      }));
    },
    replace(car: ICar) {
      const carIndex = this._cars.findIndex(c => c.id === car.id);
      const newCars = this._cars.concat();
      newCars[carIndex] = car;
      return of(this._cars = newCars);
    },
    delete(carId: number) {
      return of(this._cars = this._cars.filter(c => c.id !== carId));
    },
  };

  return fakeCarsService;
}

describe('CarHomeComponent', () => {
  let component: CarHomeComponent;
  let fixture: ComponentFixture<CarHomeComponent>;
  let fakeCarsService: any;


  beforeEach(async(() => {

    fakeCarsService = createFakeCarsService();

    spyOn(fakeCarsService, 'all').and.callThrough();
    spyOn(fakeCarsService, 'append').and.callThrough();
    spyOn(fakeCarsService, 'replace').and.callThrough();
    spyOn(fakeCarsService, 'delete').and.callThrough();

    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, HttpClientTestingModule, ],
      declarations: [
        CarHomeComponent,
      ],
      providers: [ { provide: CarsService, useValue: fakeCarsService } ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh cars', () => {
    const carsLength = component.cars.length;
    component.doRefreshCars();
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(carsLength);
  });

  it('should append car', () => {

    const car: INewCar = { make: 'test', model: 'test', year: 2002, color: 'red', price: 100 };

    const carsLength = component.cars.length;

    component.doAppendCar(car);

    expect(fakeCarsService.append).toHaveBeenCalledWith(car);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(carsLength + 1);
  });

  it('should replace car', () => {

    const car: ICar = { id: 2, make: 'test', model: 'test', year: 2002, color: 'red', price: 100 };

    const carsLength = component.cars.length;

    component.doReplaceCar(car);

    expect(fakeCarsService.replace).toHaveBeenCalledWith(car);
    expect(fakeCarsService.all).toHaveBeenCalled();
    expect(component.cars.length).toBe(carsLength);
    expect(component.cars.find(c => c.id === car.id)!.color).toBe('red');
  });

  it('should delete car', () => {

    const carId = 2;

    component.doDeleteCar(carId);

    expect(fakeCarsService.delete).toHaveBeenCalledWith(carId);
    expect(fakeCarsService.all).toHaveBeenCalled();
    // expect(component.cars.length).toBe(2);
    expect(component.cars.filter(c => c.id === carId).length).toBe(0);
  });

  it('edit car', () => {
    component.doEditCar(2);
    expect(component.editCarId).toBe(2);
  });

  it('cancel car', () => {
    component.doCancelCar();
    expect(component.editCarId).toBe(-1);
  });

});
