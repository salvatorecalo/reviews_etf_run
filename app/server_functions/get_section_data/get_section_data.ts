import CourseModel from "@/app/(utils)/models/LinkModel";
import connectToDb from "../connect_to_db/connect_to_db";
import { courseType } from "@/app/(utils)/models/course";
import { ICourse } from "@/app/(utils)/models/iCourse";

export async function getSectionData(courseType: courseType) : Promise<ICourse[]> {
    try {
        await connectToDb()
        const results = await CourseModel.find(
            { type: courseType}
        ).lean()
        
        return results
    } catch (error) {
        console.log(error)
        return []
    }
}