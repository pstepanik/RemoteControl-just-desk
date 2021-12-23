input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("LEFT")
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    radio.sendString("FRONT")
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("BACK")
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("A+B")
    basic.showString("B")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("RIGHT")
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
})
radio.setGroup(0)
