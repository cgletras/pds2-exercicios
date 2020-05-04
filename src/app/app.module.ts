import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { FruitListComponent } from './fruit-list/fruit-list.component';
import { NameListComponent } from './name-list/name-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitListComponent,
    NameListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
