import moment from "moment";

export const timetable = {
  Monday: [
    { start: "08:40", end: "09:05", text: "Regi&shy;stration", lesson: false },
    { start: "09:05", end: "10:10", text: "PSHE", lesson: true },
    { start: "10:30", end: "11:35", text: "Maths", lesson: true },
    { start: "11:40", end: "12:45", text: "Mandarin", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Geography", lesson: true },
    { start: "14:55", end: "16:00", text: "Drama", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Tuesday: [
    { start: "08:40", end: "09:05", text: "Regi&shy;stration", lesson: false },
    { start: "09:05", end: "10:10", text: "PE", lesson: true },
    { start: "10:30", end: "11:35", text: "English", lesson: true },
    { start: "11:40", end: "12:45", text: "Chemistry", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Computing", lesson: true },
    { start: "14:55", end: "16:00", text: "French", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Wednesday: [
    { start: "08:40", end: "09:05", text: "Regi&shy;stration", lesson: false },
    { start: "09:05", end: "10:10", text: "History", lesson: true },
    { start: "10:30", end: "11:35", text: "PE", lesson: true },
    { start: "11:40", end: "12:45", text: "Art", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "English", lesson: true },
    { start: "14:55", end: "16:00", text: "Latin", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Thursday: [
    { start: "08:40", end: "09:05", text: "Regi&shy;stration", lesson: false },
    { start: "09:05", end: "10:10", text: "Techn&shy;ology", lesson: true },
    { start: "10:30", end: "11:00", text: "Techn&shy;ology", lesson: true },
    { start: "11:00", end: "11:30", text: "Piano", lesson: true },
    { start: "11:30", end: "11:40", text: "Break", lesson: false },
    { start: "11:40", end: "12:45", text: "Biology", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Maths", lesson: true },
    { start: "14:55", end: "16:00", text: "Mandarin", lesson: true },
    { start: "16:00", end: "17:00", text: "Exercise", lesson: false },
    { start: "17:00", end: "18:00", text: "Prep", lesson: true },
  ],
  Friday: [
    { start: "08:40", end: "09:05", text: "Regi&shy;stration", lesson: false },
    { start: "09:05", end: "10:10", text: "RPE", lesson: true },
    { start: "10:30", end: "11:35", text: "Maths or English", lesson: true },
    { start: "11:40", end: "12:45", text: "French", lesson: true },
    { start: "12:45", end: "13:45", text: "Lunch", lesson: false },
    { start: "13:45", end: "14:50", text: "Music", lesson: true },
    { start: "14:55", end: "16:00", text: "Physics", lesson: true },
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

export const screenShouldBeDark = (currentMoment) => {
  const today = currentMoment.format("dddd");
  return (
    !(today in timetable) ||
    currentMoment.hour() >= 20 ||
    currentMoment.hour() < 7
  );
};
