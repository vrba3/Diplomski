import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kupi-auto';

  pageNumber: number = 0;
  constructor() {

  }

  public ngOnInit() {
    if(sessionStorage.getItem("page") != null){
      this.changeNumber(Number(sessionStorage.getItem("page")));
    }
  }

  changeNumber(index: number) {
    this.pageNumber = index;
  }

  goToLoginPage(): void {
    this.changeNumber(1);
    sessionStorage.setItem("page",'1');
  }

  backToHomePage(): void {
    this.changeNumber(0);
    sessionStorage.setItem("page",'0');
  }

  goToUsersPage(): void {
    this.changeNumber(2);
    sessionStorage.setItem("page",'2');
  }

  goToRegisterPage(): void {
    this.changeNumber(3);
    sessionStorage.setItem("page",'3');
  }
}
