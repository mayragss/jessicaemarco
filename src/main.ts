import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home.component';
import { PresentesComponent } from './app/presentes.component';
import { AcomodacoesComponent } from './app/acomodacoes.component';
import { AcomodacoesCentroComponent } from './app/acomodacoes-centro.component';
import { DresscodeComponent } from './app/dresscode.component';
import { TransporteComponent } from './app/transporte.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'presentes', component: PresentesComponent },
      { path: 'acomodacoes', component: AcomodacoesComponent },
      { path: 'acomodacoes-centro', component: AcomodacoesCentroComponent },
      { path: 'dresscode', component: DresscodeComponent },
      { path: 'transporte', component: TransporteComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ])
  ]
})
  .catch(err => console.error(err));


