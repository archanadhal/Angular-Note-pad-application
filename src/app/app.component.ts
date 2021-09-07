import { Component } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'notepad-app';
  public title='';
  public note='';
  public noteList:Note[]=[];

  onSubmit(noteForm:any){
    const newNote:Note={
      title:this.title,
      note:this.note,
      time:new Date().toISOString()
    }
    this.noteList.push(newNote);
    noteForm.form.reset();
  }

  
}
