interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
  tick();
}

function createClock(Ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new Ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  tick() {
    console.log('beep')
  }
}
class AnalogClock implements ClockInterface {
  tick() {
    console.log('tick')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
