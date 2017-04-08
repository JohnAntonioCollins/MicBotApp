import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MotorService {
    //TODO: this.data will become get-pin-state etc
    private data: any;

    //current ip: CHOOSE ONE:
    //private currentIP: string = "http://192.168.1.159:8080/";
    //DON'T FORGET TO CHANGE IMG SRC IN HTML
    private currentIP: string = "http://10.0.0.20:8080/";

    private rsvpURL: string = this.currentIP + "rsvp";
    private toggleURL: string = this.currentIP + "toggleLED";
    private myImageURL: string = this.currentIP + "getImage";
    private startCameraURL: string = this.currentIP + "startCamera";
    private stopCameraURL: string = this.currentIP + "stopCamera";
    private motor_A_forwardURL: string = this.currentIP + "motor_A_forward";
    private motor_A_reverseURL: string = this.currentIP + "motor_A_reverse";
    private motor_B_forwardURL: string = this.currentIP + "motor_B_forward";
    private motor_B_reverseURL: string = this.currentIP + "motor_B_reverse";

    constructor(private http: Http) {}

    rsvpTEST(){
        this.http.get(this.rsvpURL).subscribe(res => {


            console.log(res);
        })
        console.log("rsvp test log response");
    }

    getImage(){
        this.http.get(this.myImageURL,this.data).subscribe(res => console.log('got picture: ' + res));
         
        console.log("motor-service says did getImage");
    }

    refreshImage(){
    Observable.interval(3100).subscribe(x => {

 var image = document.getElementById("myImageId");

    this.getImage();
    });
}
    startCamera(){
        this.http.post(this.startCameraURL,this.data).subscribe(res => console.log('camera started: '+ res));
    }
    stopCamera(){
        this.http.post(this.stopCameraURL,this.data).subscribe(res => console.log('camera stopped: ' + res));
    }

    toggleLED(){
        this.http.post(this.toggleURL,this.data).subscribe(res => console.log('response received: ' + res));
    }

    motor_A_forward(){
        this.http.post(this.motor_A_forwardURL,this.data).subscribe(res => console.log('response received: ' + res))
    }

    motor_A_reverse(){
        this.http.post(this.motor_A_reverseURL,this.data).subscribe(res => console.log('response received: ' + res))
    }

    motor_B_forward(){
        this.http.post(this.motor_B_forwardURL,this.data).subscribe(res => console.log('response received: ' + res))
    }

    motor_B_reverse(){
        this.http.post(this.motor_B_reverseURL,this.data).subscribe(res => console.log('response received: ' + res))
    }

    
}



