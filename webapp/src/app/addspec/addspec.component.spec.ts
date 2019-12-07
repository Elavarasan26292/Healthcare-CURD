import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddspecComponent } from './addspec.component';

describe('AddspecComponent', () => {
  let component: AddspecComponent;
  let fixture: ComponentFixture<AddspecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
