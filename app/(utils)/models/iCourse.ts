import { Document } from "mongoose";
import { courseType, yearType } from "./course";

export interface ICourse extends Document {
    name: string;
    lang: string;
    polls: boolean;
    type: courseType;
    year: yearType;
    pro: string[];
    not: string[];
}