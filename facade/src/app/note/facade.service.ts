import { Injectable } from '@angular/core';
import { NoteModule } from './note.module';
import { StateService } from './state/state.service';
import { NoteApi } from './api/note.api';
import { Observable } from 'rxjs';
import { Note } from './domain/note';

@Injectable()
export class FacadeService {
  constructor(private state: StateService, private api: NoteApi) {}

  /**
   * getting notes observable from the state object
   */
  public getNotes$(): Observable<Note[]> {
    return this.state.getNotes$();
  }

  /**
   * Load all notes from the API
   */
  public loadNotes(): void {
    this.api.loadAllNotes().subscribe((notes: Note[]) => {
      this.state.setNotes(notes);
    });
  }
}
