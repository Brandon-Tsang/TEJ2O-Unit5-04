/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Mar 2026
 * This program will show LED colors.
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// turn on the LEDs
input.onButtonPressed(Button.A, function() {
    // turn on red
    pins.digitalWritePin(DigitalPin.P13, 1)
    basic.showString('Red')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)

    // turn on green
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Green')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on blue
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Blue')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn on magenta
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('Magenta')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)

    // turn on cyan
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Cyan')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on yellow
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    basic.showString('Yellow')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)

    // turn on white
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    basic.showString('White')
    basic.pause(1000)
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
})
