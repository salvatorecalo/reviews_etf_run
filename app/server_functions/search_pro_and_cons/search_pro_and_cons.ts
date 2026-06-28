import CourseModel from "@/app/(utils)/models/LinkModel";
import connectToDb from "../connect_to_db/connect_to_db";
import { ICourse } from "@/app/(utils)/models/iCourse";

export async function searchProAndCons(courseName: string){
    try {
        await connectToDb()

        const pro_and_cons = (await CourseModel.find(
            { name: courseName }
        ).lean())[0] as ICourse | null

        return pro_and_cons
    } catch (e) {
        console.log(e)
        return null
    }

}