// This program causes the LEDs to scroll to the left when button A is pressed and scroll to the right when button B is pressed
led.enable(false)
pins.analogWritePin(AnalogPin.P6, 0)
pins.analogWritePin(AnalogPin.P8, 0)
pins.analogWritePin(AnalogPin.P9, 0)
let index = 1023
basic.forever(() => {
    if (index < 2046) {
        if (index <= 1023) {
            pins.analogWritePin(AnalogPin.P6, index)
        } else {
            pins.analogWritePin(AnalogPin.P6, 1023 - (index - 1023))
        }
    } else {
        pins.analogWritePin(AnalogPin.P6, 0)
    }
    if (index > 1023) {
        if (index <= 2046) {
            pins.analogWritePin(AnalogPin.P8, index - 1023)
        } else {
            pins.analogWritePin(AnalogPin.P8, 1023 - (index - 2047))
        }
    } else {
        pins.analogWritePin(AnalogPin.P8, 0)
    }
    if (index < 1023) {
        pins.analogWritePin(AnalogPin.P9, 1022 - index)
    } else if (index > 2048) {
        pins.analogWritePin(AnalogPin.P9, index - 2048)
    } else {
        pins.analogWritePin(AnalogPin.P9, 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        index = index + 31
        if (index > 3069) {
            index = 0
        } else { }
    } else if (input.buttonIsPressed(Button.A)) {
        index = index - 31
        if (index < 0) {
            index = 3069
        } else { }
    } else { }
    control.waitMicros(1000)
})
