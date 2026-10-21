import Reveal from '../../components/Reveal/Reveal.jsx'
import {facts} from '../../data/content.js'
import './Facts.css'
export default function Facts(){
  return (
    <section className="facts"><div className="container facts__grid">
      {facts.map(([t,d],i)=><Reveal key={t} delay={i*100} className="card facts__item"><strong>{t}</strong><span>{d}</span></Reveal>)}
    </div></section>
  )
}
