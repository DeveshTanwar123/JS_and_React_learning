import { endPoints } from "../endpoints";
import { CLASS_LIST } from "./dummy-data";


class Students {

    getClassList() {
        return endPoints.fetch('/getClassListUrl', CLASS_LIST)
    }
}

export const students = new Students()