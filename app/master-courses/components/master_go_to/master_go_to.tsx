import Link from "next/link";
import "./master_go_to.css"

export function MasterGoTo(){
    return (
        <section className="gotoContainer">
            <span className="gotoLabel">Vai a</span>
            
            <div className="gotoLinks">
                <Link href="#primoAnno" className="gotoBtn">Primo anno</Link>
                <Link href="#secondoAnno" className="gotoBtn">Secondo anno</Link>
            </div>
        </section>
    )
}