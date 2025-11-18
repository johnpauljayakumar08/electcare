
import styles from './page.module.css'
import { projects } from "../../lib/data.js"
import Card from './Card.jsx';

export default function OverlayCards() {
  return (
    <div> <h1 className="text-4xl md:text-5xl font-light text-center py-4 text-[#888891] tracking-tighter bg-[#0c0d0e]">
          Electcare Industries 
        </h1>
    <main className={`${styles.main} p-10`}>
      {
        projects.map( (project, i) => {
          return <Card key={`p_${i}`} {...project} i={i}/>
        })
      }
    </main>
    </div>
  )
}