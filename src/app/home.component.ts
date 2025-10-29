import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileDetectionService } from './mobile-detection.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./app.component.css']
})
export class HomeComponent implements OnInit {
  isMobile = false;

  constructor(private mobileDetectionService: MobileDetectionService) {}

  ngOnInit() {
    this.isMobile = this.mobileDetectionService.isMobileDevice();
    
    window.addEventListener('resize', () => {
      this.isMobile = this.mobileDetectionService.isMobileDevice();
    });
  }
}

