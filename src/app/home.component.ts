import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class HomeComponent implements OnInit, AfterViewInit {
  isMobile = false;

  constructor(private mobileDetectionService: MobileDetectionService) {}

  ngOnInit() {
    this.isMobile = this.mobileDetectionService.isMobileDevice();
    
    window.addEventListener('resize', () => {
      this.isMobile = this.mobileDetectionService.isMobileDevice();
    });
  }

  ngAfterViewInit() {
    // Tocar música automaticamente quando a home for aberta
    setTimeout(() => {
      this.playMusicAutomatically();
    }, 100);
  }

  playMusicAutomatically() {
    const audio = document.querySelector('audio') as HTMLAudioElement;
    if (audio && audio.paused) {
      audio.play().then(() => {
        // Atualizar o estado do botão de música no app.component
        const musicButton = document.querySelector('.music-control') as HTMLElement;
        if (musicButton) {
          musicButton.classList.add('playing');
        }
      }).catch(error => {
        // Alguns navegadores bloqueiam autoplay, então ignoramos o erro silenciosamente
        console.log('Autoplay bloqueado pelo navegador. O usuário pode clicar no botão para tocar.');
      });
    }
  }
}

