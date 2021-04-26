import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ola-mundo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
<<<<<<< HEAD
    expect(app.title).toEqual('ola-mundo!');
=======
    expect(app.title).toEqual('ola-mundo');
>>>>>>> fc2b818460f0b9deecb67e3081a65199e98d75e8
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span').textContent).toContain('ola-mundo!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('ola-mundo app is running!');
>>>>>>> fc2b818460f0b9deecb67e3081a65199e98d75e8
  });
});
