import Link from "next/link";
import "./bachelor_go_to.css"

export function BachelorGoTo(){
    return (
        <section className="gotoContainer">
            <span className="gotoLabel">Vai a</span>
            
            <div className="gotoLinks">
                <Link href="#primoAnno" className="gotoBtn">Primo anno</Link>
                <Link href="#secondoAnno" className="gotoBtn">Secondo anno</Link>
                <Link href="#terzoAnno" className="gotoBtn">Terzo anno</Link>
            </div>
        </section>
    )
}