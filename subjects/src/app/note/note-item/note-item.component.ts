import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../interfaces/note';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {
  @Input() note: Observable<Note>;

  constructor() { }

  ngOnInit() {
  }

}
