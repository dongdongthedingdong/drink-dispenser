
let TOO_COLD = 0
let TOO_HOT = 1
let IN_RANGE = 2

let state: number = IN_RANGE
let temperature: number = 0

let strip = neopixel.create(DigitalPin.P4, 4, NeoPixelMode.RGB)

function show_red(){
    strip.showColor(neopixel.rgb(255,0,0))
    strip.show()
}

function show_green() {
    strip.showColor(neopixel.rgb(255, 0, 0))
    strip.show()
}

function show_blue() {
    strip.showColor(neopixel.rgb(255, 0, 0))
    strip.show()
}

function readTemperature(){
    return pins.analogReadPin(AnalogPin.P0)
}
function updateSystem() {
temperature = readTemperature()
}

function evaluateState(state: number) {
if(temperature > 20 && temperature < 30){
    return IN_RANGE
}
else if(temperature <= 20){
    return TOO_COLD
}
else if(temperature >= 30){
    return TOO_HOT
}
else{
    return state
}
}

function reactToState(state: number) {
if(state == TOO_COLD){
show_red()
}

else if(state == TOO_HOT){
show_blue
}

else{
show_green()
}

}

basic.forever(function () {
    updateSystem()
    state = evaluateState(state)
    reactToState(state)
})

