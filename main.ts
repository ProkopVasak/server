pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
radio.setGroup(69)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
let enabled = false
let listA = [0]
let listB = [0]
let listC = [0]
let listD = [0]
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
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
        listA.push(1)
    }
    
    if (name == "vote" && value == 2) {
        listB.push(1)
    }
    
    if (name == "vote" && value == 3) {
        listC.push(1)
    }
    
    if (name == "vote" && value == 4) {
        listD.push(1)
    }
    
})
