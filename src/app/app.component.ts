import { Component } from '@angular/core';
import wordArray from "../utils/words" 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  word = '';
  limit = 10;
  hadleSlideChange(newLimit:number)
  {
    this.limit = newLimit;
  }
  generate()
  {
    this.word = wordArray.slice(0,this.limit).join(' ') 
  }
}
