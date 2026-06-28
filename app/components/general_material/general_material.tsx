import { getSectionData } from '@/app/server_functions/get_section_data/get_section_data'
import './general_material.css'
import { MaterialCarousel } from './components/material_carousel'

export async function GeneralMaterial() {
  
  const bachelorCourses = await getSectionData("bachelor")
  const masterCourses = await getSectionData("master")

  return (
    <section className="general-material">
      {bachelorCourses ? (
        <MaterialCarousel materialType={bachelorCourses} text="Recensioni triennale" />
      ) : (
       <></>
      )}
      {
        masterCourses ? (
          <MaterialCarousel materialType={masterCourses} text="Recensioni magistrale" />
        ) : (
          <></>
        )
      }
    </section>
  )
}