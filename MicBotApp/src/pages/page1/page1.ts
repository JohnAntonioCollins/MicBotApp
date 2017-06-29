import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MotorService } from '../../services/motor-service'

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  
  constructor(public navCtrl: NavController, private motorService: MotorService) {
  }

  rsvpAppButton() {
    this.motorService.rsvpTEST();
  }

  toggleAppButton(){
    this.motorService.toggleLED();
  }

  motor_A_forwardBUTTON(){
    this.motorService.motor_A_forward();
  }

  motor_A_reverseBUTTON(){
    this.motorService.motor_A_reverse();
  }

  motor_B_reverseBUTTON(){
    this.motorService.motor_B_reverse();
  }

  motor_B_forwardBUTTON(){
    this.motorService.motor_B_forward();
  }

}
