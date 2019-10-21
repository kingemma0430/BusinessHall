import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyBalanceComponent } from './daily-balance.component';

describe('DailyBalanceComponent', () => {
  let component: DailyBalanceComponent;
  let fixture: ComponentFixture<DailyBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
