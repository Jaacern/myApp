import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarinformacionPage } from './editarinformacion.page';

describe('EditarinformacionPage', () => {
  let component: EditarinformacionPage;
  let fixture: ComponentFixture<EditarinformacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarinformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
