import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() loginPage = new EventEmitter<string>();
  @Output() registerPage = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goToLogin(): void{
    this.loginPage.emit();
  }

  goToRegister(): void {
    this.registerPage.emit();
  }
}
