import { expect } from "chai";
import { getCurrentEvent, getNextEvent } from "../timetable";
import moment from "moment";

describe("Get current events", () => {
  it("Returns no events for Saturday", () => {
    const t = moment("Saturday 12:00", "dddd HH:mm");

    const expected = null;
    const actual = getCurrentEvent(t);

    expect(actual).to.equal(expected);
  });
  it('Returns "registration" at 9:00 on Monday', () => {
    const t = moment("Monday 09:00", "dddd HH:mm");

    const expected = {
      text: "Registration",
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
  it('Returns "Lesson 1" at 9:00 on Monday', () => {
    const t = moment("Monday 09:00", "dddd HH:mm");

    const expected = {
      text: "Lesson 1",
    };
    const actual = getNextEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it('Returns "Lesson 4" at lunchtime on Wednesday', () => {
    const t = moment("Monday 13:00", "dddd HH:mm");

    const expected = {
      text: "Lesson 4",
    };
    const actual = getNextEvent(t);

    expect(actual.text).to.equal(expected.text);
  });
  it('Returns "Registration" at the beginning of Thursday', () => {
    const t = moment("Thursday 07:00", "dddd HH:mm");

    const expected = {
      text: "Registration",
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
