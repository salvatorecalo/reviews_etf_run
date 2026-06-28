import style from "./page.module.css"
import './globals.css'
import { GeneralMaterial } from "./components/general_material/general_material"
import { SearchPanel } from "./components/SearchPanel/SearchPanel";

export default async function Home() {

  return (
    <div className={style.page}>
      <SearchPanel />
      <GeneralMaterial />
      <p>WARNING: this website is not the official one of Politecnico di Torino and is not even affiliated with it, everything you can find here is mantaied by volounteers.</p>
    </div>
  );
}
