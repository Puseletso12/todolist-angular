import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox: EventEmitter<Todo> = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('On Click Has Been Clicked');
  }
  onCheckBoxClick(todo: any) {
    console.log(todo);
    this.todoCheckBox.emit(todo);
    console.log('On Check BOX Has Been Clicked');
  }
}
