let Time = 0
let Start = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    Time = input.runningTime() - Start
    basic.showNumber(Math.idiv(input.runningTime(), 1000))
    basic.pause(1000)
    basic.showNumber(Time % 1000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Start = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
