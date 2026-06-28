export interface Course {
    name: string,
    lang: string,
    polls: boolean,
    type: courseType,
    year: yearType,
    pro: string[],
    not: string[]
}

export type courseType = "bachelor" | "master"
export type yearType = "primoAnno" | "secondoAnno" | "terzoAnno"