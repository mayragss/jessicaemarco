import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MobileDetectionService } from './mobile-detection.service';

@Component({
  selector: 'app-acomodacoes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acomodacoes.component.html',
  styleUrls: ['./acomodacoes.component.css']
})
export class AcomodacoesComponent implements OnInit {
  isMobile = false;

  constructor(private mobileDetectionService: MobileDetectionService) {}

  ngOnInit() {
    this.isMobile = this.mobileDetectionService.isMobileDevice();
    
    window.addEventListener('resize', () => {
      this.isMobile = this.mobileDetectionService.isMobileDevice();
    });
  }
}

