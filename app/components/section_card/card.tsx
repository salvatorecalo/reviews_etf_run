import { ICourse } from "@/app/(utils)/models/iCourse"
import styles from "./card.module.css"
import Image from "next/image"
import Link from "next/link"

export function SectionCard({course}: {course: ICourse}) {
    return (
        <article key={course._id.toString()} className={styles.sectionCard}>
            <h3 className={styles.courseName}>{course.name}</h3>
            {
                course.lang === "it" ? 
                    <Image src="/it_flag.svg" alt="bandiera italiana" width="30" height="30" />
                    :
                    <Image src="/en_flag.png" alt="english flag" width="30" height="30" />
            }
            <Link href={`/course/${course.name}`} className={styles.sectionCardBtn}>Leggi le recensioni</Link>
        </article>
    )
}