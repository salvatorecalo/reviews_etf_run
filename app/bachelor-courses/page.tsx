import { getSectionData } from "../server_functions/get_section_data/get_section_data"
import { BachelorGoTo } from "./components/bachelor_go_to/bachelor_go_to"
import styles from "./bachelor_courses.module.css"
import { CoursesSection } from "./components/courses_section/courses_section"
import { ICourse } from "../(utils)/models/iCourse"

export default async function BachelorCourse() {
    const bachelorCourses = await getSectionData("bachelor")
    
    const firstYearCourses = bachelorCourses.filter((bachelorCourses: ICourse) => bachelorCourses.year === "primoAnno")
    const secondYearCourses = bachelorCourses.filter((bachelorCourses: ICourse) => bachelorCourses.year === "secondoAnno")
    const thirdYearCourses = bachelorCourses.filter((bachelorCourses: ICourse) => bachelorCourses.year === "terzoAnno")

    if (!bachelorCourses || bachelorCourses.length === 0){
        return (
            <div className={styles.emptyState}>
                <p>Nessun corso triennale trovato nel database.</p>
            </div>
        )
    }

    return (
        <section className={styles.coursesContainer}>
            <header className={styles.pageHeader}>
                <h1 className={styles.mainTitle}>Elettronica Triennale</h1>
                <BachelorGoTo />
            </header>

            <div className={styles.grid}>
                <div className={styles.gridDiv}>
                    <h2>Primo anno</h2>
                    <CoursesSection id="primoAnno" bachelorCourses={firstYearCourses} />
                </div>
                <div className={styles.gridDiv}>
                    <h2>Secondo anno</h2>
                    <CoursesSection id="secondoAnno" bachelorCourses={secondYearCourses} />
                </div>
                <div className={styles.gridDiv}>
                    <h2>Terzo anno</h2>
                    <CoursesSection id="terzoAnno" bachelorCourses={thirdYearCourses} />
                </div>
            </div>
        </section>
    )
}