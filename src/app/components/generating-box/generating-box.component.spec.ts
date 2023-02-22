import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratingBoxComponent } from './generating-box.component';

describe('GeneratingBoxComponent', () => {
  let component: GeneratingBoxComponent;
  let fixture: ComponentFixture<GeneratingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratingBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
