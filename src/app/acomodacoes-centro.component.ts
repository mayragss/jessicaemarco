import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileDetectionService } from './mobile-detection.service';

@Component({
  selector: 'app-acomodacoes-centro',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acomodacoes-centro.component.html',
  styleUrls: ['./acomodacoes-centro.component.css']
})
export class AcomodacoesCentroComponent implements OnInit {
  isMobile = false;

  constructor(private mobileDetectionService: MobileDetectionService) {}

  ngOnInit() {
    this.isMobile = this.mobileDetectionService.isMobileDevice();
    
    window.addEventListener('resize', () => {
      this.isMobile = this.mobileDetectionService.isMobileDevice();
    });
  }
}

