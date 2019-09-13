import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../domain/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @Input() notes$: Observable<Note[]>;

  constructor() { }

  ngOnInit() {
  }

}
