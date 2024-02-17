import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintpatientComponent } from './printpatient.component';

describe('PrintpatientComponent', () => {
  let component: PrintpatientComponent;
  let fixture: ComponentFixture<PrintpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintpatientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrintpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
