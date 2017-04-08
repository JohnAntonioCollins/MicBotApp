import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { MotorService } from '../../services/motor-service'

import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  

  //constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    constructor(public navCtrl: NavController, private motorService: MotorService) {
    
  }

  refreshImage(){
    this.motorService.refreshImage();
  }
  startCamera(){
    this.motorService.startCamera();
  }
  stopCamera(){
    this.motorService.stopCamera();
  }

}
