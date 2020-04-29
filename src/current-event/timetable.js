import moment from "moment";

export const timetable = {
  Monday: [
    { start: "08:40", end: "09:05", text: "Registration", lesson: false },
    { start: "09:05", end: "10:10", text: "Lesson 1", lesson: true },
    { start: "10:30", end: "11:35", text: "Lesson 2", lesson: true },
    { start: "11:40", end: "12:45", text: "Lesson 3", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Lesson 4", lesson: true },
    { start: "14:55", end: "16:00", text: "Lesson 5", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Tuesday: [
    { start: "08:40", end: "09:05", text: "Registration", lesson: false },
    { start: "09:05", end: "10:10", text: "Lesson 1", lesson: true },
    { start: "10:30", end: "11:35", text: "Lesson 2", lesson: true },
    { start: "11:40", end: "12:45", text: "Lesson 3", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Lesson 4", lesson: true },
    { start: "14:55", end: "16:00", text: "Lesson 5", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Wednesday: [
    { start: "08:40", end: "09:05", text: "Registration", lesson: false },
    { start: "09:05", end: "10:10", text: "Lesson 1", lesson: true },
    { start: "10:30", end: "11:35", text: "Lesson 2", lesson: true },
    { start: "11:40", end: "12:45", text: "Lesson 3", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Lesson 4", lesson: true },
    { start: "14:55", end: "16:00", text: "Lesson 5", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Thursday: [
    { start: "08:40", end: "09:05", text: "Registration", lesson: false },
    { start: "09:05", end: "10:10", text: "Lesson 1", lesson: true },
    { start: "10:30", end: "11:35", text: "Lesson 2", lesson: true },
    { start: "11:40", end: "12:45", text: "Lesson 3", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Lesson 4", lesson: true },
    { start: "14:55", end: "16:00", text: "Lesson 5", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Friday: [
    { start: "08:40", end: "09:05", text: "Registration", lesson: false },
    { start: "09:05", end: "10:10", text: "Lesson 1", lesson: true },
    { start: "10:30", end: "11:35", text: "Lesson 2", lesson: true },
    { start: "11:40", end: "12:45", text: "Lesson 3", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Lesson 4", lesson: true },
    { start: "14:55", end: "16:00", text: "Lesson 5", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
};

export const getCurrentEvent = (currentMoment) => {
  const today = currentMoment.format("dddd");
  if (!(today in timetable)) {
    return null;
  }
  const now = currentMoment.format("HH:mm");

  const index = timetable[today].findIndex(
    (obj) => obj["start"] <= now && obj["end"] > now
  );
  if (index == -1) {
    return null;
  }
  return timetable[today][index];
};

export const getNextEvent = (currentMoment) => {
  const today = currentMoment.format("dddd");
  if (!(today in timetable)) {
    return null;
  }
  const now = currentMoment.format("HH:mm");

  const index = timetable[today].findIndex((obj) => obj["start"] > now);
  if (index == -1) {
    return null;
  }
  return timetable[today][index];
};
