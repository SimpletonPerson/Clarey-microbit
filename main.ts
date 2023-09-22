enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("D E F G A B - - ", 190), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    music.setBuiltInSpeakerEnabled(true)
    record.playAudio(record.BlockingState.Blocking)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    record.startRecording(record.BlockingState.Blocking)
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("G - B F A - E A ", 190), music.PlaybackMode.InBackground)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # . # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # . # .
        . # # # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        . # # # .
        . . # . .
        `)
    basic.pause(500)
    basic.showString("Calibrating...")
    if (input.temperature() < 10) {
        music.play(music.stringPlayable("B C5 B C5 B C5 B C5 ", 404), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # # # .
            . . # . .
            `)
    } else if (input.temperature() > 40) {
        music.play(music.stringPlayable("E F G F E F G F ", 300), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . # # # .
            . . # . .
            `)
    } else {
        if (input.temperature() > 20) {
            music.play(music.stringPlayable("F D E A G B C5 G ", 190), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . # . .
                . # . # .
                . # # # .
                . # # # .
                . . # . .
                `)
        }
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
datalogger.log(datalogger.createCV("temparature", input.temperature()))
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
