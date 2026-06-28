import mongoose, { Schema } from "mongoose";
import { ICourse } from "./iCourse";

const CourseSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    lang: {
        type: String,
        required: true
    },
    polls: {
        type: Boolean,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true,
    },
    pro: {
        type: [String],
        required: true
    },
    not: {
        type: [String],
        required: true
    }
})

const CourseModel = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema, 'reviews')
export default CourseModel