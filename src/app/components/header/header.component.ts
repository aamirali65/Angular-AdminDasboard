import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  currentTime!: Date;
  currentDate!: Date;

  ngOnInit() {
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      this.currentTime = new Date();
      this.currentDate = new Date();
    }, 1000); // Update every second
  }
}
