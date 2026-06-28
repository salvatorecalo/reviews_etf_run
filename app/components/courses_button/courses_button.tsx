import './courses_button.css'

interface CourseButtonProps {
    text: string,
    link: string
}

export function CoursesButton({text, link}: CourseButtonProps){
    return (
        <a href={link} className="courses_button">
            {text}
        </a>
    )
}