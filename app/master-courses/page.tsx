import { getSectionData } from "../server_functions/get_section_data/get_section_data"
import { MasterGoTo } from "./components/master_go_to/master_go_to"
import styles from "./master_courses.module.css"
import { CoursesSection } from "./components/courses_section/courses_section"
import { ICourse } from "../(utils)/models/iCourse"

export default async function MasterCourse() {
    const masterCourses = await getSectionData("master")
    
    const firstYearCourses = masterCourses.filter((masterCourse: ICourse) => masterCourse.year === "primoAnno")
    const secondYearCourses = masterCourses.filter((masterCourse: ICourse) => masterCourse.year === "secondoAnno")

    if (!masterCourses || masterCourses.length === 0){
        return (
            <div className={styles.emptyState}>
                <p>Nessun corso magistrale trovato nel database.</p>
            </div>
        )
    }

    return (
        <section className={styles.coursesContainer}>
            <header className={styles.pageHeader}>
                <h1 className={styles.mainTitle}>Elettronica Triennale</h1>
                <MasterGoTo />
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
            </div>
        </section>
    )
}