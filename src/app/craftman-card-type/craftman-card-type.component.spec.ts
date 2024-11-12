import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftmanCardTypeComponent } from './craftman-card-type.component';

describe('CraftmanCardTypeComponent', () => {
  let component: CraftmanCardTypeComponent;
  let fixture: ComponentFixture<CraftmanCardTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CraftmanCardTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraftmanCardTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
