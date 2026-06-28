'use server'
import CourseModel from "@/app/(utils)/models/LinkModel";
import connectToDb from "../connect_to_db/connect_to_db";
import { courseType, yearType } from "@/app/(utils)/models/course";

export interface InsertFeedbackProps {
    name: string;
    lang: string;
    polls: boolean;
    type: courseType;
    year: yearType;
    pro: string[];
    not: string[];
}

export async function InsertFeedback(payload: InsertFeedbackProps) {
    try {
        await connectToDb();
        
        const newCourse = await CourseModel.create(payload);
        
        return { 
            success: true, 
            message: "Feedback inserito con successo!",
            insertedId: newCourse._id.toString() 
        };

    } catch (error) {
        console.error("Errore durante l'inserimento del feedback:", error);
        return {
            success: false, 
            message: "Impossibile salvare il feedback. Riprova." 
        };
    }
}