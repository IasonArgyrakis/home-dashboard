import { LightService } from './../light.service';

import { Light } from './../light';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  Lights:Light[];
  LightService:LightService
  constructor(service:LightService){
    this.LightService=service;
    this.Lights=this.LightService.getList()
    
  }
   
  ngOnInit(): void { 
  } 
  setLightState(light,$event){
   let setOpt={light,stateTo:$event.checked}
   this.LightService.setState(setOpt)
   this.LightService.getList()
   
  }
  

  
  


}
