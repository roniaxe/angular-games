import { Injectable } from '@angular/core';
import { Note } from '../domain/note';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class StateService {
  private notes$: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>([]);

  constructor() {}

  public getNotes$(): Observable<Note[]> {
    return this.notes$.asObservable();
  }

  setNotes(notes: Note[]) {
    this.notes$.next(notes);
  }
}
