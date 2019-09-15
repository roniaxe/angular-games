import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../domain/note';
import { of, Observable } from 'rxjs';

@Injectable()
export class NoteApi {
  constructor(private http: HttpClient) {}

  /**
   * loadAllNotes
   */
  public loadAllNotes(): Observable<Note[]> {
      return of([
        new Note(1, 'hello note 1'),
        new Note(2, 'this is note 2'),
        new Note(3, 'note 3 with Id 3......')
      ]);
  }
}
