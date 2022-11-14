import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoadingComponent } from './loading.component';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create loading component', () => {
    expect(component).toBeTruthy();
  });

  it('should cotain one element with class loading-wrapper', ()=>{
    const wrapper = fixture.debugElement.queryAll(By.css('.loading-wrapper'));
    expect(wrapper.length).toBe(1);
  });

  it('should cotain one image with class loading-image', ()=>{
    const wrapper = fixture.debugElement.queryAll(By.css('img.loading-image'));
    expect(wrapper.length).toBe(1);
  });

});
