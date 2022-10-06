input.onButtonPressed(Button.B, function () {
    let 저장된_값 = 0
    OLED.writeNumNewLine(저장된_값)
})
let _500원 = 0
let _100원 = 0
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let 스위치 = true
OLED.init(128, 64)
let strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
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
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        _100원 = 100
    } else {
        _100원 = 100
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        _500원 = 500
    } else {
        _500원 = 500
    }
})
