import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileDetectionService } from './mobile-detection.service';

@Component({
  selector: 'app-presentes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './presentes.component.html',
  styleUrls: ['./presentes.component.css']
})
export class PresentesComponent implements OnInit {
  isMobile = false;

  constructor(private mobileDetectionService: MobileDetectionService) {}

  ngOnInit() {
    this.isMobile = this.mobileDetectionService.isMobileDevice();
    
    window.addEventListener('resize', () => {
      this.isMobile = this.mobileDetectionService.isMobileDevice();
    });
  }
}

