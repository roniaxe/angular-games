import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NoteListComponent } from './note-list/note-list.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
import { NoteComponent } from './note.component';
import { FacadeService } from './facade.service';
import { StateService } from './state/state.service';
import { NoteApi } from './api/note.api';
import { NoteRoutingModule } from './note-routing.module';



@NgModule({
  declarations: [NoteComponent, NoteListComponent, NoteDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NoteRoutingModule
  ],
  providers: [FacadeService, StateService, NoteApi]
})
export class NoteModule { }
