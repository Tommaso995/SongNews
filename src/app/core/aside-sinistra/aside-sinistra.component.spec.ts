import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSinistraComponent } from './aside-sinistra.component';

describe('AsideSinistraComponent', () => {
  let component: AsideSinistraComponent;
  let fixture: ComponentFixture<AsideSinistraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideSinistraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideSinistraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
