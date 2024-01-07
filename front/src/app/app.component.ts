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

  goToSearchedCarsPage(): void {
    this.changeNumber(7);
    sessionStorage.setItem("page",'7');
  }

  goToSearchedCarsPageForLoggedUsers(): void {
    this.changeNumber(8);
    sessionStorage.setItem("page",'8');
  }

  openCarProfile(id: string) {
    this.changeNumber(9);
    sessionStorage.setItem("page",'9');
  }

  openCarProfileByLoggedUser(id: string) {
    this.changeNumber(14);
    sessionStorage.setItem("page",'14');
  }

  openCarProfileFromPosts() {
    this.changeNumber(11);
    sessionStorage.setItem("page",'11');
  }

  showUserPosts(): void {
    this.changeNumber(10);
    sessionStorage.setItem("page",'10');
  }

  backToPosts(): void {
    this.changeNumber(10);
    sessionStorage.setItem("page",'10');
  }

  goToRequestsPage(): void {
    this.changeNumber(12);
    sessionStorage.setItem("page",'12');
  }

  goToNewCarPage(): void {
    this.changeNumber(13);
    sessionStorage.setItem("page",'13');
  }

  backToSearchedCarsPageForLoggedUsers(): void {
    this.changeNumber(14);
    sessionStorage.setItem("page",'14');
  }

  showRegisteredCarsForLoggedUsers(): void {
    this.changeNumber(15);
    sessionStorage.setItem("page",'15');
  }

  backToRegisteredCarsPageForLoggedUsers(): void {
    this.changeNumber(15);
    sessionStorage.setItem("page",'15');
  }

  showCarProfileFromRegisteredCarsForLoggedUsers(): void {
    this.changeNumber(16);
    sessionStorage.setItem("page",'16');
  }

  backToCarPage(): void {
    this.changeNumber(9);
    sessionStorage.setItem("page",'9');
  }

  goToRegisteredCarPage(): void {
    this.changeNumber(18);
    sessionStorage.setItem("page",'18');
  }

  backToRegisteredCarsPage(): void {
    this.changeNumber(17);
    sessionStorage.setItem("page",'17');
  }

  goToRegisteredCarsPage(): void {
    this.changeNumber(17);
    sessionStorage.setItem("page",'17');
  }
}
