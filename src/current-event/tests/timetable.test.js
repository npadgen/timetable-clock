import { expect } from "chai";
import {
  getCurrentEvent,
  getNextEvent,
  screenShouldBeDark,
} from "../timetable";
import moment from "moment";

describe("Get current events", () => {
  it("Returns no events for Saturday", () => {
    const t = moment("Saturday 12:00", "dddd HH:mm");

    const expected = null;
    const actual = getCurrentEvent(t);

    expect(actual).to.equal(expected);
  });
  it('Returns "Regi&shy;stration" at 9:00 on Monday', () => {
    const t = moment("Monday 09:00", "dddd HH:mm");

    const expected = {
      text: "Regi&shy;stration",
    };
    const actual = getCurrentEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it('Returns "Lunch" at lunchtime on Wednesday', () => {
    const t = moment("Monday 13:00", "dddd HH:mm");

    const expected = {
      text: "Lunch",
    };
    const actual = getCurrentEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it("Returns nothing at the beginning of Thursday", () => {
    const t = moment("Thursday 07:00", "dddd HH:mm");

    const expected = null;
    const actual = getCurrentEvent(t);

    expect(actual).to.equal(expected);
  });
  it("Returns nothing at the end of Thursday", () => {
    const t = moment("Thursday 20:00", "dddd HH:mm");

    const expected = null;
    const actual = getCurrentEvent(t);

    expect(actual).to.equal(expected);
  });
});

describe("Get next events", () => {
  it("Returns no events for Saturday", () => {
    const t = moment("Saturday 12:00", "dddd HH:mm");

    const expected = null;
    const actual = getNextEvent(t);

    expect(actual).to.equal(expected);
  });
  it('Returns "PSHE" at 9:00 on Monday', () => {
    const t = moment("Monday 09:00", "dddd HH:mm");

    const expected = {
      text: "PSHE",
    };
    const actual = getNextEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it('Returns "Geography" at lunchtime on Wednesday', () => {
    const t = moment("Monday 13:00", "dddd HH:mm");

    const expected = {
      text: "Geography",
    };
    const actual = getNextEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it('Returns "Regi&shy;stration" at the beginning of Thursday', () => {
    const t = moment("Thursday 07:00", "dddd HH:mm");

    const expected = {
      text: "Regi&shy;stration",
    };
    const actual = getNextEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it("Returns nothing at the end of Thursday", () => {
    const t = moment("Thursday 20:00", "dddd HH:mm");

    const expected = null;
    const actual = getNextEvent(t);

    expect(actual).to.equal(expected);
  });
});

describe("Background is dark at night and weekends", () => {
  it("Background is dark at weekends (when there are no events)", () => {
    const t = moment("Saturday 12:00", "dddd HH:mm");

    const expected = true;
    const actual = screenShouldBeDark(t);

    expect(actual).to.equal(expected);
  });
  it("Background is dark at night", () => {
    const t = moment("Wednesday 21:00", "dddd HH:mm");

    const expected = true;
    const actual = screenShouldBeDark(t);

    expect(actual).to.equal(expected);
  });
  it("Background is dark in early morning", () => {
    const t = moment("Wednesday 04:00", "dddd HH:mm");

    const expected = true;
    const actual = screenShouldBeDark(t);

    expect(actual).to.equal(expected);
  });
  it("Background is bright in the school day", () => {
    const t = moment("Wednesday 12:00", "dddd HH:mm");

    const expected = false;
    const actual = screenShouldBeDark(t);

    expect(actual).to.equal(expected);
  });
});
