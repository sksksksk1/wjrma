let _500원 = 0
let _100원 = 0
tinkercademy.crashSensorSetup(DigitalPin.P1)
let 스위치 = true
OLED.init(128, 64)
let strip2 = neopixel.create(DigitalPin.P2, 24, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.servoWritePin(AnalogPin.P3, 180)
        pins.servoWritePin(AnalogPin.P4, 0)
    } else {
        pins.servoWritePin(AnalogPin.P3, 0)
        pins.servoWritePin(AnalogPin.P4, 180)
    }
})
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        스위치 = !(스위치)
    }
    if (스위치 == true) {
        _100원 = 100
    }
    if (스위치 == false) {
        _100원 = 100
    }
    basic.pause(500)
})
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        스위치 = !(스위치)
    }
    if (스위치 == true) {
        _500원 = 500
    }
    if (스위치 == false) {
        _500원 = 500
    }
    basic.pause(500)
})
