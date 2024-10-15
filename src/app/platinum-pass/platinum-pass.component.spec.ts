import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatinumPassComponent } from './platinum-pass.component';

describe('PlatinumPassComponent', () => {
  let component: PlatinumPassComponent;
  let fixture: ComponentFixture<PlatinumPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlatinumPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlatinumPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
