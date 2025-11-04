import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  isPlaying = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  ngAfterViewInit() {
    // Tentar tocar música automaticamente ao carregar a página
    setTimeout(() => {
      this.playMusicAutomatically();
    }, 100);
  }

  playMusicAutomatically() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      audio.play().then(() => {
        this.isPlaying = true;
      }).catch(error => {
        // Alguns navegadores bloqueiam autoplay, então ignoramos o erro silenciosamente
        console.log('Autoplay bloqueado pelo navegador. O usuário pode clicar no botão para tocar.');
      });
    }
  }

  toggleMusic() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio) {
      if (this.isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(error => {
          console.log('Erro ao reproduzir música:', error);
        });
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  onAudioEnded() {
    this.isPlaying = false;
  }
}


