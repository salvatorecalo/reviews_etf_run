import { ICourse } from "@/app/(utils)/models/iCourse";
import { SectionCard } from "./components/card/card";
import styles from '../../master_courses.module.css'

export function CoursesSection({ id, bachelorCourses }: { id: string, bachelorCourses: ICourse[] }) {

    if (!bachelorCourses || bachelorCourses.length === 0) {
        return <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>Non ci sono corsi</p>
    }

    return (
        <section id={id} className={styles.coursesSection}>
            {bachelorCourses.map((course: ICourse) => (
                <SectionCard course={course} key={course.name} />
            ))}
        </section>
    )
}