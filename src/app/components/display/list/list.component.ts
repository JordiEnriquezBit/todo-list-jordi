import { FirebaseService } from './../../../services/firebase.service';
import { Todo } from './../../../shared/class/Todo';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  todoList:Todo[];

  @Output() delete = new EventEmitter<Todo>();

  constructor(private fs :FirebaseService) { }

  ngOnInit(): void {
    this.fs.getItems$().subscribe(
      data => {this.todoList=data;
      console.log(this.todoList);});
  }

  deleteTodo(todo){
    this.delete.emit(todo);
  }

}
