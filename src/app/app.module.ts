import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './typeuser/add/add.component';
import { EditComponent } from './typeuser/edit/edit.component';
import { ListComponent } from './typeuser/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
