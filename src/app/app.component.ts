import { Todo } from './shared/class/Todo';
import { FirebaseService } from './services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-list';
  flagFooter=true;
  text = "soy un texto";
  formGroup: FormGroup;

   constructor(private fs:FirebaseService,private fb:FormBuilder){}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      _name:'',
      _description:''
    })
  }

  async createTodo(todo){
    await this.fs.create(todo);
  }

   delete(todo){
     this.fs.delete(todo);
  }

  changeFooterFlag(){
    if (this.flagFooter) {
      this.flagFooter=false;
    }else{
      this.flagFooter=true;
    }
  }
}
