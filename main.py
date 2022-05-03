pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
radio.set_group(92)
radio.set_transmit_serial_number(True)
radio.set_transmit_power(7)
enabled = False
a = 0
b = 0
c = 0
d = 0

def on_button_pressed_b():
    global enabled
    if enabled == False:
        radio.send_value("enabled", 1)
        enabled = True
    elif enabled == True:
        radio.send_value("enabled", 0) 
        enabled = False   
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    global a, b, c, d
    if name == "vote" and value == 1:
        a += 1
    if name == "vote" and value == 2:
        b += 1    
    if name == "vote" and value == 3:
        c += 1 
    if name == "vote" and value == 4:
        d += 1 
    if name == "seri_cilso":
        radio.send_value("ack", value)

       
radio.on_received_value(on_received_value)
def on_button_pressed_a():
    global a, b, c, d
    print("hlasy A = "+ a)
    print("hlasy B = "+ b)
    print("hlasy C = "+ c)
    print("hlasy D = "+ d)
input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_ab():
    global a, b, c, d
    a = 0
    b = 0
    c = 0
    d = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)