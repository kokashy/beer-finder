import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.css']
})
export class BrowserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value as string))
  }
search = new FormControl('')

@Output('search') searchEmitter = new EventEmitter<string>();

}
