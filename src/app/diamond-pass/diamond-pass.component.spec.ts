import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiamondPassComponent } from './diamond-pass.component';

describe('DiamondPassComponent', () => {
  let component: DiamondPassComponent;
  let fixture: ComponentFixture<DiamondPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiamondPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiamondPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
