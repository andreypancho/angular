import { Component, OnInit } from "@angular/core";
import { UsersServise } from "../users.servise";

@Component({
  selector: "app-setup-page",
  templateUrl: "./setup-page.component.html",
  styleUrls: ["./setup-page.component.css"]
})
export class SetupPageComponent implements OnInit {
  size;

  constructor(private usersServise: UsersServise) {}

  ngOnInit() {
    this.size = this.usersServise.size;
  }

  onChange() {
    this.usersServise.setSize(+this.size);
  }
}
