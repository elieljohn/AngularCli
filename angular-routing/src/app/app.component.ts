import { Component } from '@angular/core';
import { LoggerService } from 'my-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-routing';

  constructor(loggerService: LoggerService) {
    loggerService.log("hello world");
  }
}
