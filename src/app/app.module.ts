import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';
import { LightService } from './light.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MainComponent } from './main/main.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon"
import {MatButtonModule} from "@angular/material/button"
import { MatSlideToggleModule}  from '@angular/material/slide-toggle';
import { FullscreenComponent } from './fullscreen/fullscreen.component';



@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    MainComponent,
    FullscreenComponent,
    
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    

    
    
  ],
  providers: [
    LightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
