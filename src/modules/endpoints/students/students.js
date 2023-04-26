import { endPoints } from '../endpoints';
import { CLASS_LIST } from './dummy-data';
import { SECTION_LIST } from './dummy-data';

class Students {
  getClassList() {
    return endPoints.fetch('/getClassListUrl', CLASS_LIST);
  }

  getSectionList() {
    return endPoints.fetch('/getSectionListUrl', SECTION_LIST);
  }
}

export const students = new Students();
