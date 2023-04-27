import { endPoints } from '../endpoints';
import { CLASS_LIST } from './dummy-data';
import { SECTION_LIST } from './dummy-data';
import { SUBJECTS_LIST } from './dummy-data';

class Students {
  studentList = [];
  getClassList() {
    return endPoints.fetch('/getClassListUrl', CLASS_LIST);
  }

  getSectionList() {
    return endPoints.fetch('/getSectionListUrl', SECTION_LIST);
  }

  getSubjectsList() {
    return endPoints.fetch('/getSubjectsListUrl', SUBJECTS_LIST);
  }

  createStudent(studentDetials) {
    this.studentList.push(studentDetials);
    console.log(studentList);
  }
}

export const students = new Students();
