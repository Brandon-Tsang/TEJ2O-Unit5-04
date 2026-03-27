/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Brandon
 * Created on: Mar 2026
 * This program will show Traffic lights.
*/

// variables
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// neopixel cleanup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)

// traffic light
input.onButtonPressed(Button.A, function (){
    basic.clearScreen()

    // green
    neopixelStrip.setPixelColor(2, NeoPixelColors.Green)
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.clear()

    // yellow
    neopixelStrip.setPixelColor(1, NeoPixelColors.Yellow)
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.clear()

    // red
    neopixelStrip.setPixelColor(0, NeoPixelColors.Red)
    neopixelStrip.show()
    basic.pause(2000)
    neopixelStrip.clear()
})