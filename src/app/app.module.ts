import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentDgGridComponent } from './component-dg-grid/component-dg-grid.component';
import { WizardComponentComponent } from './wizard-component/wizard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDgGridComponent,
    WizardComponentComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
