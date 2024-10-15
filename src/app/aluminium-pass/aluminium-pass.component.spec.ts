import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluminiumPassComponent } from './aluminium-pass.component';

describe('AluminiumPassComponent', () => {
  let component: AluminiumPassComponent;
  let fixture: ComponentFixture<AluminiumPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AluminiumPassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AluminiumPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
