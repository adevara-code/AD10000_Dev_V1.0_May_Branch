import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistraionComponent } from './user-registraion.component';

describe('UserRegistraionComponent', () => {
  let component: UserRegistraionComponent;
  let fixture: ComponentFixture<UserRegistraionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistraionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistraionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
