import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TimeComponent } from './time/time.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeComponent,
    TasksComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
