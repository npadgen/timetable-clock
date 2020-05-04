# timetable-clock
Display a clock and a summary of the current and next events on a weekly calendar.  Rings a school bell at the start and end of each event.

This is designed to be run on an 800x480 display such as a HyperPixel 4.0" for a Raspberry Pi.

![Picture of timetable-clock running on my Pi](https://github.com/npadgen/timetable-clock/blob/master/assets/IMG_8776.jpeg?raw=true)

## Running the program

* Clone this repo
* Install node.js and npm
* Run `npm install`
* Run `npm run dev`
* Point a browser at http://localhost:3000 (tested with Firefox)
* Connect a speaker

Browser restrictions mean that you need to click the big unmute button to be able to hear the school bell.

## Caveat

This is a very rudimentary program.  The events are hard-coded into `src/timetable.js`.

## Future plans

* Allow it to be served from apache httpd rather than `npm run dev`
* Turn `timetable.js` into a proper Redux store
* Read from a web calendar rather than the hardcoded timetable

... but what's here is good enough for my needs (keeping my daughter on track with remote learning during the COVID-19 lockdown) so I don't know if I'll ever get round to any of those tasks :-/
