import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HPage } from './h.page';

describe('HPage', () => {
  let component: HPage;
  let fixture: ComponentFixture<HPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
