import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-comic',
  templateUrl: './new-comic.page.html',
  styleUrls: ['./new-comic.page.scss'],
})
export class NewComicPage implements OnInit {
  comicForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.comicForm = new FormGroup({

    });
  }

}
