import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  isPlaying = false;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  private visibilityChangeHandler?: () => void;
  private beforeUnloadHandler?: () => void;
  private windowBlurHandler?: () => void;

  ngAfterViewInit() {
    // Tentar tocar música automaticamente ao carregar a página
    setTimeout(() => {
      this.playMusicAutomatically();
    }, 100);

    // Pausar música quando a página perder o foco ou for minimizada
    this.visibilityChangeHandler = () => {
      if (document.hidden && this.isPlaying) {
        this.pauseMusic();
      }
    };
    document.addEventListener('visibilitychange', this.visibilityChangeHandler);

    // Pausar música quando a janela perder o foco
    this.windowBlurHandler = () => {
      if (this.isPlaying) {
        this.pauseMusic();
      }
    };
    window.addEventListener('blur', this.windowBlurHandler);

    // Pausar música quando a página estiver sendo fechada
    this.beforeUnloadHandler = () => {
      if (this.isPlaying) {
        this.pauseMusic();
      }
    };
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  ngOnDestroy() {
    // Remover event listeners quando o componente for destruído
    if (this.visibilityChangeHandler) {
      document.removeEventListener('visibilitychange', this.visibilityChangeHandler);
    }
    if (this.windowBlurHandler) {
      window.removeEventListener('blur', this.windowBlurHandler);
    }
    if (this.beforeUnloadHandler) {
      window.removeEventListener('beforeunload', this.beforeUnloadHandler);
    }
  }

  pauseMusic() {
    const audio = this.audioPlayer?.nativeElement;
    if (audio && this.isPlaying) {
      audio.pause();
      this.isPlaying = false;
    }
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


