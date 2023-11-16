import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ChipsComponent } from './chips/chips.component';
import { ListeVideosComponent } from './liste-videos/liste-videos.component';
import { PetiteVideoComponent } from './liste-videos/petite-video/petite-video.component';
import { ImageComponent } from './liste-videos/petite-video/image/image.component';
import { NomComponent } from './liste-videos/petite-video/nom/nom.component';
import { ScoreComponent } from './liste-videos/petite-video/score/score.component';
import { VuesComponent } from './liste-videos/petite-video/vues/vues.component';
import { DescriptionComponent } from './liste-videos/petite-video/description/description.component';
import { DateComponent } from './liste-videos/petite-video/date/date.component';
import { DureeComponent } from './liste-videos/petite-video/duree/duree.component';
import { VideoCompleteComponent } from './video-complete/video-complete.component';
import { AvisComponent } from './avis/avis.component';



@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    UtilisateurComponent,
    SidenavComponent,
    ChipsComponent,
    ListeVideosComponent,
    PetiteVideoComponent,
    ImageComponent,
    NomComponent,
    ScoreComponent,
    VuesComponent,
    DescriptionComponent,
    DateComponent,
    DureeComponent,
    VideoCompleteComponent,
    AvisComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
