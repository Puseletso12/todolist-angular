import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  tasks: { name: string; priority: string; dueDate: string }[] = [];
  taskName = '';
  priority = 'Medium';
  dueDate: any;
  priorities = ['High', 'Medium', 'Low'];

  constructor() {
    this.loadTasks();
  }

  //Delete unwanted tasks
  deleteTask(taskToDelete: any) {
    this.tasks = this.tasks.filter((tasks) => tasks !== taskToDelete);
    this.saveTasks();
  }

  //Save existing task to the localstorage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  //Loads new tasks to the local storage
  loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = storedTasks;
  }

  // For overdue tasks
  isOverdue(dueDate: string): boolean {
    return new Date(dueDate) < new Date();
  }

  // For completed tasks
  markAsCompleted(task: any) {
    task.completed = true;
    this.saveTasks();
  }
}
