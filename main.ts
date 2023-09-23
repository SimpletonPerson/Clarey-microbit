enum RadioMessage {
    message1 = 49434
}
input.onPinPressed(TouchPin.P2, function () {
    datalogger.log(
    datalogger.createCV("record_start", 0),
    datalogger.createCV("record_end", 1),
    datalogger.createCV("version_number", 1.2),
    datalogger.createCV("initial_temperature", "busy"),
    datalogger.createCV("temperature_thermometer", 2)
    )
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
    record.playAudio(record.BlockingState.Blocking)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # # # .
        # # . # #
        # # # # #
        # . # . #
        . # # # .
        `)
    music.play(music.stringPlayable("C D D E F E D E ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F E D E F E F F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G F F G E G A ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    datalogger.log(
    datalogger.createCV("record_start", 1),
    datalogger.createCV("record_end", 0),
    datalogger.createCV("version_number", 1.2),
    datalogger.createCV("initial_temperature", "busy"),
    datalogger.createCV("temperature_thermometer", 2)
    )
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
        datalogger.log(datalogger.createCV("temperature_thermometer", input.temperature()))
        music.play(music.stringPlayable("B C5 B C5 B C5 B C5 ", 404), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # . # .
            . # # # .
            . . # . .
            `)
    } else if (input.temperature() > 40) {
        datalogger.log(datalogger.createCV("temperature_thermometer", input.temperature()))
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
            datalogger.log(datalogger.createCV("temperature_thermometer", input.temperature()))
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
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.setColumnTitles(
"initial_temperature",
"temperature_thermometer",
"record_start",
"record_end",
"version_number"
)
datalogger.log(
datalogger.createCV("record_end", "2"),
datalogger.createCV("initial_temperature", input.temperature()),
datalogger.createCV("version_number", 1.2),
datalogger.createCV("record_start", "2"),
datalogger.createCV("temperature_thermometer", 2),
datalogger.createCV("update_name", "clarey:datalog")
)
music.play(music.stringPlayable("F - G E B G E G ", 190), music.PlaybackMode.InBackground)
music.setBuiltInSpeakerEnabled(true)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . . .
    . # # # .
    . . # . .
    `)
basic.pause(1800)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
loops.everyInterval(3600000, function () {
    datalogger.log(
    datalogger.createCV("version_number", 1.2),
    datalogger.createCV("initial_temperature", input.temperature()),
    datalogger.createCV("power", "yes"),
    datalogger.createCV("record_end", 2),
    datalogger.createCV("record_start", 2),
    datalogger.createCV("temperature_thermometer", 2)
    )
})
