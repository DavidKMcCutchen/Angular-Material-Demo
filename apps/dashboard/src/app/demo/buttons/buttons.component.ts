import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'styling-app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  bookmark!: boolean;
  checked!: boolean;


  bookmarked() {
    this.bookmark = !this.bookmark;
    if (this.bookmark === true) return (console.log('Face is Touched!')); else return console.log('Face Untouched ;(')
  };

  checkBox() {
    this.checked = !this.checked;
    if (this.checked === true) return (console.log('Checked!')); else return console.log('Unchecked!')
  }
}
