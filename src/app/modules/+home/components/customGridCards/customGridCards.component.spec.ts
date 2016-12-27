import { ComponentFixture, TestBed, inject } from '@angular/core/testing';


import { By } from '@angular/platform-browser/src/dom/debug/by';

import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MaterialModule } from '@angular/material';

// Load the implementations that should be tested
import { CustomGridCardsComponent } from './customGridCards.component';

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
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });




  
});
