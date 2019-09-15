import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './interfaces/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  noteList: Observable<Note[]>;
  editedNote: Note;

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.noteList = this.noteService.getNotes();
  }
}
