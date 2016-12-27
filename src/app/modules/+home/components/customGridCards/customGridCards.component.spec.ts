import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import 'hammerjs';

import { By } from '@angular/platform-browser/src/dom/debug/by';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule, MdDialog, MdDialogRef } from '@angular/material';

// Load the implementations that should be tested
import { CustomGridCardsComponent } from './customGridCards.component';

import { CustomModal } from '../customModal/customModal.component';

describe('Module Home -> Component GridCards', () => {
  let component: CustomGridCardsComponent;
  let fixture;

  const elements = [
    {
      title: 'example1',
      description: 'description example1'
    },
    {
      title: 'example2',
      description: 'description example2'
    }
  ];


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule.forRoot()
      ],
      declarations:[ CustomGridCardsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents(); // compile template and css

    fixture = TestBed.createComponent(CustomGridCardsComponent);
    component = fixture.componentInstance;

   //let dialogRef = new MdDialogRef<CustomModal>();

    spyOn(MdDialog.prototype, 'open').and.returnValue(true);
    spyOn(MdDialogRef.prototype, 'afterClosed').and.returnValue(true);

  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });


  it('should open dialog', () => {
    let element = {
      title:'title1',
      description:'description1'
    };

    component.openDialog(element);
  });



  
});
