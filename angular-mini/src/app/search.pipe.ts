import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search"
})
export class searchPipe implements PipeTransform {
  transform(users, value) {
    return users.filter(user => {
      return user.name.includes(value);
    });
  }
}
