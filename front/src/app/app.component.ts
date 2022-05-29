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

  goToUsersPage(text: string): void {
    if(text === 'administrator') {
      this.changeNumber(5);
      sessionStorage.setItem("page",'5');
    } else if(text === 'user') {
      this.changeNumber(2);
      sessionStorage.setItem("page",'2');
    }
  }

  goToRegisterPage(): void {
    this.changeNumber(3);
    sessionStorage.setItem("page",'3');
  }

  goToProfile(): void {
    this.changeNumber(4);
    sessionStorage.setItem("page",'4');
  }

  showRegisteredUsers(): void {
    this.changeNumber(6);
    sessionStorage.setItem("page",'6');
  }

  goToSearchedCarsPage(text: string): void {
    this.changeNumber(7);
    sessionStorage.setItem('search', text);
    sessionStorage.setItem("page",'7');
  }

  goToSearchedCarsPageForLoggedUsers(text: string): void {
    this.changeNumber(8);
    sessionStorage.setItem('search', text);
    sessionStorage.setItem("page",'8');
  }
}
