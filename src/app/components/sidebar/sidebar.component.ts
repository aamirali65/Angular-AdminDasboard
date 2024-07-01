import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
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
