import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReusableComponent } from './view-reusable.component';

describe('ViewReusableComponent', () => {
  let component: ViewReusableComponent;
  let fixture: ComponentFixture<ViewReusableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewReusableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
