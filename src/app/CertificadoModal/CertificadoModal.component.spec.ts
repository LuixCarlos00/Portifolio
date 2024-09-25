/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CertificadoModalComponent } from './CertificadoModal.component';

describe('CertificadoModalComponent', () => {
  let component: CertificadoModalComponent;
  let fixture: ComponentFixture<CertificadoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificadoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificadoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
