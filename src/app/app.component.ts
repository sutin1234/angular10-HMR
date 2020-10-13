import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular10-hmr';
  timer = 0;

  ngOnInit(): void {
    setInterval(() => this.timer++, 1000);
  }
}
