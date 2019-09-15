import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../interfaces/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @Input() notes$: Observable<Note[]>;
  @Output() selectedNoteEventEmitter = new EventEmitter<Note>();
  selectedNoteId: number;

  constructor() {}

  ngOnInit() {}

  onSelect(note: Note): void {
    this.selectedNoteId = note.id;
    this.selectedNoteEventEmitter.next(note);
  }
}
