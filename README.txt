#MicBot

MicBot is a system to remotely control a motorized microphone stand.

##MicBot App

###App will run on Android phone: 
Full screen image from camera pointed at mic’, refreshes intermittantly(on button release?)
buttons: up, down, left, right.
checkbox: lamp on/off.

##MicBot Server
headless server running on Raspberry Pi:
Sends images and LED state to App.
Receives motion  and LED on/off commands from App.
Sends motion and LED on/off commands to Raspberry Pi GPIO pins.

##Hardware

Android device via wifi connection to Raspberry Pi which will operate motors, camera, and illumination.