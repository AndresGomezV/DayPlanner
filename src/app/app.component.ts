import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { DayPlannerComponent } from "./day-planner/day-planner.component";

@Component({
    selector: "app-root",
    standalone: true,
    imports: [RouterOutlet, DayPlannerComponent],
    templateUrl: "./app.component.html",
})
export class AppComponent {
    title = "Daily Planner";
}
