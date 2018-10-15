import { Component, OnInit } from '@angular/core';
import { ScreenService } from './services/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Elementos';

  constructor(private screenService: ScreenService) { }

  ngOnInit() {
  }
}
