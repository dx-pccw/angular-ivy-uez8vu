import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { TopBarComponent } from './top-bar/top-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChecklistComponent, TopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
