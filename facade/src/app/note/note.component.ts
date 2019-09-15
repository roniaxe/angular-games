import { Component, OnInit } from '@angular/core';
import { FacadeService } from './facade.service';
import { Observable } from 'rxjs';
import { Note } from './domain/note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  notes$: Observable<Note[]>;
  constructor(private facade: FacadeService) { }

  ngOnInit() {
    this.facade.loadNotes();
    this.notes$ = this.facade.getNotes$();
  }

}
