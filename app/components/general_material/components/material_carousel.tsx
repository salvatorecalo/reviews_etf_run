"use client"
import { ICourse } from "@/app/(utils)/models/iCourse"
import './material_carousel.css'
import { SectionCard } from "../../section_card/card"

interface MaterialCarouselProp {
    materialType: ICourse[],
    text: string
}

export function MaterialCarousel({ materialType, text }: MaterialCarouselProp) {

    return (
        <>
            {materialType ? (
                <>
                    <h3>{text}</h3>
                    <div className="material-carousel">
                        {materialType!.length > 0 ? (
                        materialType!.map((item, idx) => (
                            <SectionCard key={`${text}-${item.name || idx}`} course={item} />
                        ))
                    ) : (
                            <p>Nessuna recensione per i seguenti corsi</p>
                    )}
                    </div>
                </>
            ) : (
                <p></p>
            )}
        </>
    )
}