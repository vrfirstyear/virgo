input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 8; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 40)
        basic.pause(1000)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 40)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
        basic.pause(1000)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 40)
        basic.pause(1000)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
input.onButtonPressed(Button.B, function () {
    R = 0
    G = 0
    B = 0
    for (let index = 0; index < 225; index++) {
        R += 1
        B += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(10)
    }
    for (let index = 0; index < 225; index++) {
        G += 1
        R += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(10)
    }
    for (let index = 0; index < 225; index++) {
        B += 1
        G += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(10)
    }
})
let B = 0
let G = 0
let R = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
