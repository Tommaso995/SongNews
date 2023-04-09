import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideDestraComponent } from './aside-destra.component';

describe('AsideDestraComponent', () => {
  let component: AsideDestraComponent;
  let fixture: ComponentFixture<AsideDestraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideDestraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideDestraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
