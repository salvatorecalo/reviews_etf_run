import { CoursesButton } from "./components/courses_button/courses_button";
import style from "./page.module.css"
import './globals.css'
import { FeedbackForm } from "./components/feedback_form/feedback_form";
import Image from "next/image"

export default async function Home() {

  return (
    <div className={style.page}>
      <h1 className={style.mainTitle}>
        <Image src="/run_logo.webp" height="40" width="40" alt="run logo" />
        Area ETF recensioni corsi
        </h1>
      <div className={style.links}>
        <CoursesButton text="Corsi triennale" link="/bachelor-courses" />
        <CoursesButton text="Corsi magistrale" link="/master-courses" />
      </div>
      <FeedbackForm />
      <p>WARNING: this website is not the official one of Politecnico di Torino and is not even affiliated with it, everything you can find here is mantaied by volounteers.</p>
    </div>
  );
}
