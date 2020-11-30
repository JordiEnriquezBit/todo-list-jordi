import { Todo } from './../../shared/class/Todo';
import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  todo: Todo;
  @Input() formGroup:FormGroup;
  @Output() enviar = new EventEmitter<Todo>();

  constructor() { }
  i=0;
  ngOnInit(): void {
  }
  saveRecord(){

    this.todo = new Todo();
    this.todo.id = uuid();
    this.todo.orderId = this.i*2 ;
    this.todo.name = this.formGroup.get('_name').value;
    this.todo.description = this.formGroup.get('_description').value;
    this.i+=1;

    this.enviar.emit(this.todo);
  }
}
