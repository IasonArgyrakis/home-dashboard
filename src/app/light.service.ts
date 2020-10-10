import { HttpClient } from '@angular/common/http';
import { Light } from './light';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class LightService {
  
  theList=[new Light("192.168.1.61","json overhead")]
  
  constructor(private httpCl: HttpClient) {  }
  
  getList() {
     for(let light of  this.theList){
        let statUrl:string = "http://"+light.ip+"/cm?cmnd=Power";
        
        this.httpCl.get(statUrl).subscribe(resp=>{light.state=this.toBoolean(resp["POWER"])})
      }
      return this.theList
   
    }
  setState(options){
    let urlcmd:string = "http://"+options.light.ip+"/cm?cmnd=Power%20"+options.stateTo
    this.httpCl.get(urlcmd).subscribe()
    }

   toBoolean(value)
   {if(value=="ON"){return true}
    else if(value=="OFF"){return false}
  }
}
