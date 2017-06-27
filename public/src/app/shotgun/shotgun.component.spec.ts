import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShotgunComponent } from './shotgun.component';

describe('ShotgunComponent', () => {
  let component: ShotgunComponent;
  let fixture: ComponentFixture<ShotgunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShotgunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShotgunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
