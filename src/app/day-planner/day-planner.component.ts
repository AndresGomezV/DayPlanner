import { Component } from "@angular/core";
import { Task } from "../task.model";
import { TaskComponent } from "../task/task.component";
import { AddTaskComponent } from "../add-task/add-task.component";
import { TimeLeftPipe } from "../time-left.pipe";
import { HighlightDirective } from "../highlight.directive";

const today = new Date();
@Component({
    selector: "app-day-planner",
    standalone: true,
    imports: [
        TaskComponent,
        AddTaskComponent,
        TimeLeftPipe,
        HighlightDirective,
    ],
    templateUrl: "./day-planner.component.html",
    styleUrls: ["./day-planner.component.css"],
})
export class DayPlannerComponent {
    tasks: Task[] = [
        {
            id: 1,
            name: "Meeting with team",
            time: new Date(new Date().setHours(21)),
            isDueToday: true,
            completed: false,
        },
        {
            id: 2,
            name: "Client presentation",
            time: new Date(new Date().setMinutes(59)),
            isDueToday: true,
            completed: false,
        },
        {
            id: 3,
            name: "Project deadline",
            time: new Date(new Date().setMonth(today.getMonth() + 1)),
            isDueToday: false,
            completed: false,
        },
        {
            id: 4,
            name: "Team outing",
            time: new Date("Sat Apr 20 2024 13:00:00 GMT+0530"),
            isDueToday: false,
            completed: true,
        },
        {
            id: 5,
            name: "Software update",
            time: new Date(),
            isDueToday: true,
            completed: false,
        },
    ];

    selectedTask: Task | null = null;

    selectTask(task: Task) {
        this.selectedTask = this.selectedTask?.id === task.id ? null : task;
    }

    handleCompleteTask(task: Task) {
        const taskToUpdate = this.tasks.find(t => t.id === task.id)
        if (taskToUpdate) {
            taskToUpdate.completed = true;
        }
        this.selectedTask = null;
    }

    isTaskDueToday(dateString: string): boolean {
        const taskDate = new Date(dateString).setHours(0, 0, 0, 0);
        const today = new Date().setHours(0, 0, 0, 0);
        return taskDate === today;
    }

    handleNewTask(taskData: { name: string; date: string }) {
        const newTask: Task = {
            id: this.tasks.length + 1,
            name: taskData.name,
            time: new Date(taskData.date),
            isDueToday: this.isTaskDueToday(taskData.date),
            completed: false,
        };
        this.tasks.push(newTask);
    }
}
