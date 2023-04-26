class StudentClass {
  constructor(display, id) {
    this.display = display;
    this.id = id;
  }
}

class StudentSection {
  constructor(display, id) {
    this.display = display;
    this.id = id;
  }
}

class StudentSubjects {
  constructor(display, id) {
    this.display = display;
    this.id = id;
  }
}

export const CLASS_LIST = [
  new StudentClass('I', 1),
  new StudentClass('II', 2),
  new StudentClass('III', 3),
  new StudentClass('IV', 4),
  new StudentClass('V', 5),
];

export const SECTION_LIST = [
  new StudentSection('A', 1),
  new StudentSection('B', 2),
  new StudentSection('C', 3),
  new StudentSection('D', 4),
  new StudentSection('E', 5),
];

export const SUBJECTS_LIST = [
  new StudentSubjects('Hindi', 1),
  new StudentSubjects('English', 2),
  new StudentSubjects('Maths', 3),
  new StudentSubjects('Science', 4),
  new StudentSubjects('Social Science', 5),
];
