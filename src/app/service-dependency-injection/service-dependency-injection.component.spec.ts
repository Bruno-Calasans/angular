import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDependencyInjectionComponent } from './service-dependency-injection.component';

describe('ServiceDependencyInjectionComponent', () => {
  let component: ServiceDependencyInjectionComponent;
  let fixture: ComponentFixture<ServiceDependencyInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDependencyInjectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceDependencyInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
