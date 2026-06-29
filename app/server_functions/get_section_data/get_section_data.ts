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
        
        const cleanResults = results.map(result => ({
            ...result,
            _id: result._id.toString()
        }))
        return cleanResults as unknown as ICourse[]
    } catch (error) {
        console.log(error)
        return []
    }
}