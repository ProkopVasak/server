pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
radio.setGroup(69)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let enabled = false
let a = 0
let b = 0
let c = 0
let d = 0
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (enabled == false) {
        radio.sendValue("enabled", 1)
        enabled = true
    } else if (enabled == true) {
        radio.sendValue("enabled", 0)
        enabled = false
    }
    
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    if (name == "vote" && value == 1) {
        a += 1
    }
    
    if (name == "vote" && value == 2) {
        b += 1
    }
    
    if (name == "vote" && value == 3) {
        c += 1
    }
    
    if (name == "vote" && value == 4) {
        d += 1
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    console.log("hlasy A = " + a)
    console.log("hlasy B = " + b)
    console.log("hlasy C = " + c)
    console.log("hlasy D = " + d)
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    radio.sendNumber(receivedNumber)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    a = 0
    b = 0
    c = 0
    d = 0
})
