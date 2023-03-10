import { Component } from '@angular/core';
import { TaskService } from './tasks.service';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Task[];
  task: string;

  constructor(private taskService: TaskService) {
    this.tasks = [];
    this.task = '';
  }

  title = 'task-ui';

  ngOnInit() {
    this.taskService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data as Task[];
    });
  }

  addTask(task: string) {
    this.taskService.addTask(task).subscribe();
    this.task = '';
    this.ngOnInit();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe((data) => {
      console.log(data);
    });
    this.ngOnInit();
  }
}
