input.onButtonPressed(Button.A, function () {
    servos.P1.run(25)
    basic.showIcon(IconNames.House)
    basic.pause(2000)
    servos.P1.run(-25)
    basic.showIcon(IconNames.Butterfly)
    basic.pause(2000)
    servos.P1.stop()
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        servos.P1.run(25)
        basic.showIcon(IconNames.Giraffe)
        basic.pause(200)
        servos.P1.run(-25)
        basic.showIcon(IconNames.No)
        basic.pause(200)
        servos.P1.stop()
    }
})
input.onButtonPressed(Button.AB, function () {
    servos.P1.run(25)
    basic.showIcon(IconNames.Fabulous)
})
input.onButtonPressed(Button.B, function () {
    servos.P1.stop()
    basic.showIcon(IconNames.Surprised)
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
	
})
