import { Component } from "@angular/core";
import { UsersServise } from "./users.servise";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersServise]
})
export class AppComponent {}
