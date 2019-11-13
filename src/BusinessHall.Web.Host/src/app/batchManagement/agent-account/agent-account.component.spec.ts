import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAccountComponent } from './agent-account.component';

describe('AgentAccountComponent', () => {
  let component: AgentAccountComponent;
  let fixture: ComponentFixture<AgentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
