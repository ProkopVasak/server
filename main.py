pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
radio.set_group(69)
radio.set_transmit_serial_number(True)
radio.set_transmit_power(7)
enabled = False
listA = [0]
listB = [0]
listC = [0]
listD = [0]

def on_button_pressed_ab():
    global enabled
    if enabled == False:
        radio.send_value("enabled", 1)
        enabled = True
    elif enabled == True:
        radio.send_value("enabled", 0) 
        enabled = False   
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_received_value(name, value):
    global listA, listB, listC, listD
    if name == "vote" and value == 1:
        listA.push(1)
    if name == "vote" and value == 2:
        listB.push(1)    
    if name == "vote" and value == 3:
        listC.push(1)  
    if name == "vote" and value == 4:
        listD.push(1)    

       
radio.on_received_value(on_received_value)
