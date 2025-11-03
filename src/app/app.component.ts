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
    // ViewChild inicializado
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


