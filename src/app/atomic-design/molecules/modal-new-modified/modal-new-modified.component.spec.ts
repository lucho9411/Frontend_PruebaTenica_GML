import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNewModifiedComponent } from './modal-new-modified.component';

describe('ModalNewModifiedComponent', () => {
  let component: ModalNewModifiedComponent;
  let fixture: ComponentFixture<ModalNewModifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNewModifiedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalNewModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
