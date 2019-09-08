import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Note } from './interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private mokedNotes: Note[] = [{ id: 1, text: 'first Notes' }, { id: 2, text: 'note about airplanes' }];
  private edited: Note;

  private _notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(undefined);
  public notes: Observable<Note[]> = this._notes.asObservable();

  private _editedNote: BehaviorSubject<Note> = new BehaviorSubject<Note>(undefined);
  public editedNote: Observable<Note> = this._editedNote.asObservable();

  constructor() {}

  public addNote(note: Note): void {
    this.mokedNotes.push(note);
    this._notes.next([...this.mokedNotes]);
  }

  public getNotes(): Observable<Note[]> {
    return of(this.mokedNotes).pipe(delay(1000));
  }

  onEdit(selected: Note): void {
    this.edited = selected;
    this._editedNote.next(this.edited);
  }
}
