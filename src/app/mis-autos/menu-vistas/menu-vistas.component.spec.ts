import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVistasComponent } from './menu-vistas.component';

describe('MenuVistasComponent', () => {
  let component: MenuVistasComponent;
  let fixture: ComponentFixture<MenuVistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
