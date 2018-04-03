import { Component, OnInit } from "@angular/core";
import { UsersServise } from "../users.servise";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  users = [];
  searchStr = "";

  constructor(private usersServise: UsersServise) {}

  ngOnInit() {
    // this.users = this.usersServise.users;
    this.usersServise.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
