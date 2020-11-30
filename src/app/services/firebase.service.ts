import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Todo } from '../shared/class/Todo';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private afs: AngularFirestore) { }

  getItems$(): Observable<Todo[]>{
    return this.afs.collection<Todo>('todos').valueChanges();
  }

  create(todo:Todo): Promise<void> {
    console.log("create");
    console.log(todo);
    todo.id = this.afs.createId();
    return this.afs.collection<Todo>('todos').doc(todo.id).set(Object.assign({}, todo));
  }


  delete(todo){
    console.log(todo._id);
    console.log("delete");
    this.afs.collection<Todo>('todos').doc(todo._id).delete();
  }
/*
  addItems(item) { }
  deleteTodo(deletedItem){
    db.collection("todo").doc("DC").delete().then(function() {
      console.log("Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }

*/
}
