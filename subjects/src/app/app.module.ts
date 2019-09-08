import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteItemComponent } from './note/note-item/note-item.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NoteService } from './note/note.service';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteItemComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
