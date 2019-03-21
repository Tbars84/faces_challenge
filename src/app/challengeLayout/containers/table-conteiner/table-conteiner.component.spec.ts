import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableConteinerComponent } from './table-conteiner.component';

describe('TableConteinerComponent', () => {
  let component: TableConteinerComponent;
  let fixture: ComponentFixture<TableConteinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableConteinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableConteinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
