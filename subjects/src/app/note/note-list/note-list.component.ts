import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../interfaces/note';
import { NoteService } from '../note.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
  @Input() notes: Note[];
  selected: Note;

  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  onSelect(note: Note): void {
    if (this.selected && this.selected.id === note.id) {
      this.selected = undefined;
    } else {
      this.selected = note;
    }

    this.noteService.onEdit(this.selected ? { ...this.selected } : undefined);
  }
}
