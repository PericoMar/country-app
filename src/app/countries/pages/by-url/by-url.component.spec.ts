import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByUrlComponent } from './by-url.component';

describe('ByUrlComponent', () => {
  let component: ByUrlComponent;
  let fixture: ComponentFixture<ByUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByUrlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ByUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
