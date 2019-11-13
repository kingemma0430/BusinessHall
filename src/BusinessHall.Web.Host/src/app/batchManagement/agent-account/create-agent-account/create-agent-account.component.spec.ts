import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgentAccountComponent } from './create-agent-account.component';

describe('CreateAgentAccountComponent', () => {
  let component: CreateAgentAccountComponent;
  let fixture: ComponentFixture<CreateAgentAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgentAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgentAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
