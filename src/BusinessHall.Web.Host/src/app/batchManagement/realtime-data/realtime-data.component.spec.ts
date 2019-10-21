import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDataComponent } from './realtime-data.component';

describe('RealtimeDataComponent', () => {
  let component: RealtimeDataComponent;
  let fixture: ComponentFixture<RealtimeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
